import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthHttpService } from '../services/auth.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { variable } from '@angular/compiler/src/output/output_ast';
import { tap, mapTo, share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LandingGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthHttpService
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {

      let subj = new BehaviorSubject<boolean>(true);

        this.authenticationService.isAuthorized().subscribe(value => {
          if (value) {
            this.router.navigate(['/panel']);
          }
        });

        return subj.asObservable();


    }
}
