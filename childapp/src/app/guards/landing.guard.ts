import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { variable } from '@angular/compiler/src/output/output_ast';


@Injectable({ providedIn: 'root' })
export class LandingGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {



        this.authenticationService.isAuthorized().subscribe(value => {
          if (value) {
            this.router.navigate(['/panel']);

            // tslint:disable-next-line:no-shadowed-variable
            const observable = Observable.create((observer:any) => {
              observer.next(false);
            });



            return observable;

          } else {

            const observable = Observable.create((observer:any) => {
              observer.next(true);
            });
            // var obs = new Observable<boolean>.create();
            return observable;

          }



        });

        const observable = Observable.create((observer:any) => {
          observer.next(true);
        });
        // var obs = new Observable<boolean>.create();
        return observable;


    }
}
