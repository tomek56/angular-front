import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HomePage } from '../models/Homepage';
import { LinkhelperService } from './linkhelper.service';
import { Category } from '../models/category';
import { Token } from '../models/token';
import { CourseList } from '../models/courseList';

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

  getMyCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>> (this.link.getFullLink('/api/get-progress/'), {});
  }

  getCourses(): Observable<CourseList> {
    return this.http.post<CourseList> (this.link.getFullLink('/api/courses/'), {});
  }

  getCourseDetail(slug: string): Observable<Course> {
    const params = new HttpParams()
      .set('slug', slug);

    return this.http.post<Course> (this.link.getFullLink('/api/course-detail/'), params);
  }

  getToken(username: string, password: string): Observable<Token> {

      const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

      return this.http.post<Token> (this.link.getFullLink('/api/o/token/'), params);
  }
}
