import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http';


export class SpyInterceptor implements HttpInterceptor {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.headers = new HttpHeaders().set('Authorization', 'Basic cXJheGlTM3B2aTlDU0dGZEVTc3VOckU4cVdOUUNnWDZmUlpXTEw3ejpTTmZ4NHlYZ2VrZDUyUVdMa1NrcWpyWDFDN0VveEw2VVc1OTR0M2xrbXQ1YXd2UGJ0MHJWZjlpTHFqcjQ5MElIbnI4ekRCQ2VveWg0MWhpeG85dTRjSDlzV2lTRUwzSWEwT3k2ZlJwUnJUUjFVVmNWakdycFZVbGROWkhSM3dkQQ==')
    const reqCloned = req.clone({headers: this.headers});
    //const reqCloned = req.clone();
    console.log('SpyInterceptor');
    console.log(req.url);
    console.log(reqCloned);

    return next.handle(reqCloned);
  }

}
