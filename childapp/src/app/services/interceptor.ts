import { HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http';
import {Injector, Injectable} from '@angular/core';
import { AuthHttpService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import {throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { TokenStorage } from './token-storage.service';
import { Token } from '../models/token';

@Injectable()
export class SpyInterceptor implements HttpInterceptor {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private auth: AuthHttpService, private storage: TokenStorage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    //const reqCloned = req.clone();

    const tokenEndpoint = req.url.search('api/o/token/');
    const convertTokenEndpoint = req.url.search('auth/convert-token');
    const registerEnpoint = req.url.search('api/register-user');

    if (tokenEndpoint !== -1 || convertTokenEndpoint !== -1 || registerEnpoint  !== -1 ) {
      // tslint:disable-next-line:max-line-length
      this.headers = new HttpHeaders().set('Authorization', 'Basic cXJheGlTM3B2aTlDU0dGZEVTc3VOckU4cVdOUUNnWDZmUlpXTEw3ejpTTmZ4NHlYZ2VrZDUyUVdMa1NrcWpyWDFDN0VveEw2VVc1OTR0M2xrbXQ1YXd2UGJ0MHJWZjlpTHFqcjQ5MElIbnI4ekRCQ2VveWg0MWhpeG85dTRjSDlzV2lTRUwzSWEwT3k2ZlJwUnJUUjFVVmNWakdycFZVbGROWkhSM3dkQQ==')
      const reqCloned = req.clone({headers: this.headers});
      return next.handle(reqCloned);
    }

    var token = '';
    var tokenExists = false
    this.auth.getAccessToken().subscribe(value => {

      const headerValue =  'Bearer ' + value;
      this.headers = new HttpHeaders().set('Authorization', headerValue);
      token = headerValue;
      tokenExists =  (value !== null);

    });

    if (tokenExists) {
      this.headers = new HttpHeaders().set('Authorization', token);
      // tslint:disable-next-line:no-shadowed-variable
      const reqCloned = req.clone({headers: this.headers});
      // return next.handle(reqCloned);



      return next.handle(reqCloned).pipe(
        catchError(error => {
            if (error instanceof HttpErrorResponse) {
                switch ((<HttpErrorResponse>error).status) {
                    case 400:
                        return this.handle400Error(error);
                    case 401:
                        return this.handle401Error(req, next);
                    default:
                        return observableThrowError(error);
                }
            } else {
                return observableThrowError(error);
            }
        }));
    }

    const reqCloned = req.clone({});
    return next.handle(reqCloned);
  }


  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token }});
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {

    if (!this.isRefreshingToken) {
        this.isRefreshingToken = true;
        // Reset here so that the following requests wait until the token
        // comes back from the refreshToken call.
        this.tokenSubject.next(null);


        return   this.auth.refreshToken().pipe(
            switchMap((newToken: Token) => {

                if (newToken) {
                    this.tokenSubject.next(newToken.access_token);
                    return next.handle(this.addToken(req, newToken.access_token));
                }

                // If we don't get a new token, we are in trouble so logout.
                return this.logoutUser();
            }),
            catchError(error => {
                // If there is an exception calling 'refreshToken', bad news so logout.
                return this.logoutUser();
            }),
            finalize(() => {
                this.isRefreshingToken = false;
            }), );
    } else {

        return this.tokenSubject.pipe(
            filter(token => token != null),
            take(1),
            switchMap(token => {
                return next.handle(this.addToken(req, token));
            }), );
    }
}


  handle400Error(error) {
    if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
        // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
        return this.logoutUser();
    }

    return observableThrowError(error);
  }

  logoutUser() {
    // Route to the login page (implementation up to you)

    return observableThrowError('');
}

}
