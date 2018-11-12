import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TokenStorage } from './token-storage.service';
import { Token } from '../models/token';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, from, throwError, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private service: HttpService,
    private tokenStorage: TokenStorage
    ) { }


  authorize(username: string, password: string): Observable<any> {
    //  this.service.getToken(username, password).subscribe(data => {

    //   this.saveAccessData(data);
    //   const completion = new Subject<boolean>();
    //   completion.next(true);
    //   return completion.asObservable();

    // });

      return this.service.getToken(username, password).pipe(
        map((result: any) => {
          console.log('map');
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
}
