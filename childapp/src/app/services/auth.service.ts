import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TokenStorage } from './token-storage.service';
import { Token } from '../models/token';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, from, throwError, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private service: HttpService,
    private tokenStorage: TokenStorage,
    private router: Router
  ) { }

  authorize(username: string, password: string): Observable<any> {

    return this.service.getToken(username, password).pipe(
      map((result: any) => {
        this.saveAccessData(result);
        return result;
      }),
      tap()
    );
  }

  public isAuthorized(): Observable<boolean> {
    return this.tokenStorage.getAccessToken().pipe(map(token => !!token));
  }

  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  private saveAccessData(accessData: Token) {
    if (typeof accessData !== 'undefined') {
      this.tokenStorage
        .setAccessToken(accessData.access_token)
        .setRefreshToken(accessData.refresh_token);
      //this.onCredentialUpdated$.next(accessData);
    }
  }

  public logout(refresh?: boolean): void {
    console.log('logout action');
    this.tokenStorage.clear();
    if (refresh) {
      this.router.navigate(['/']);

   //   location.reload(true);
    }
  }

}
