import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {

        console.log('can activate komp');
        console.log(this.authenticationService.isAuthorized());
        console.log(state);
        console.log(route);

        this.authenticationService.isAuthorized().subscribe(value => {
          if (!value) {
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
            return false;

          }


          return true;
        });

        return this.authenticationService.isAuthorized();

        // if (this.authenticationService.isAuthorized) {
        //     // authorised so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }
}
