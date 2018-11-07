import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http';


export class SpyInterceptor implements HttpInterceptor {

  private headers = new HttpHeaders().set('Authorization', 'token');

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const reqCloned = req.clone({headers: this.headers});
    console.log(req.url);
    console.log(reqCloned);

    return next.handle(reqCloned);
  }

}
