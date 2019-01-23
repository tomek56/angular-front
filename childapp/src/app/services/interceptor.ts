import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http';
import {Injector, Injectable} from '@angular/core';
import { CredentialsServiceService } from './credentials-service.service';
import { AuthService } from './auth.service';

@Injectable()
export class SpyInterceptor implements HttpInterceptor {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    //const reqCloned = req.clone();

    const tokenEndpoint = req.url.search('api/o/token/');
    if (tokenEndpoint !== -1) {
      // tslint:disable-next-line:max-line-length
      this.headers = new HttpHeaders().set('Authorization', 'Basic cXJheGlTM3B2aTlDU0dGZEVTc3VOckU4cVdOUUNnWDZmUlpXTEw3ejpTTmZ4NHlYZ2VrZDUyUVdMa1NrcWpyWDFDN0VveEw2VVc1OTR0M2xrbXQ1YXd2UGJ0MHJWZjlpTHFqcjQ5MElIbnI4ekRCQ2VveWg0MWhpeG85dTRjSDlzV2lTRUwzSWEwT3k2ZlJwUnJUUjFVVmNWakdycFZVbGROWkhSM3dkQQ==')
      const reqCloned = req.clone({headers: this.headers});
      return next.handle(reqCloned);
    }

    var token = '';

    this.auth.getAccessToken().subscribe(value => {

      const headerValue =  'Bearer ' + value;
      this.headers = new HttpHeaders().set('Authorization', headerValue);
      token = headerValue;


    });

    if (token !== '') {
      console.log('dodaje token');
      this.headers = new HttpHeaders().set('Authorization', token);
      const reqCloned = req.clone({headers: this.headers});
      return next.handle(reqCloned);


    }

    const reqCloned = req.clone({});
    return next.handle(reqCloned);
  }

}
