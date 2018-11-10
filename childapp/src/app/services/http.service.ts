import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HomePage } from '../models/homepage';
import { LinkhelperService } from './linkhelper.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private link: LinkhelperService) { }

  getHomePageCourses(): Observable<HomePage> {
    return this.http.post<HomePage>(this.link.getFullLink('/api/homepage/'), {});
  }

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>> (this.link.getFullLink('/api/get-categories/'), {});
  }
}
