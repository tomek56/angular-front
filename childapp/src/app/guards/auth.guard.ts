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

        this.authenticationService.isAuthorized().subscribe(value => {
          if (!value) {
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
            return this.authenticationService.isAuthorized();

          }


          return this.authenticationService.isAuthorized();
        });

        return this.authenticationService.isAuthorized();

    }
}
