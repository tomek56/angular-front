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

  registerUser(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

      console.log('params');
      console.log(email);
      console.log(password);

      return this.http.post(this.link.getFullLink('/api/register-user/'), params);

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

  convertToken(providerToken: string): Observable<Token> {
    const params = new HttpParams()
    .set('grant_type', 'convert_token')
    .set('client_id', 'qraxiS3pvi9CSGFdESsuNrE8qWNQCgX6fRZWLL7z')
    // tslint:disable-next-line:max-line-length
    .set('client_secret', 'SNfx4yXgekd52QWLkSkqjrX1C7EoxL6UW594t3lkmt5awvPbt0rVf9iLqjr490IHnr8zDBCeoyh41hixo9u4cH9sWiSEL3Ia0Oy6fRpRrTR1UVcVjGrpVUldNZHR3wdA')
    .set('backend', 'facebook')
    .set('token', providerToken);

    return this.http.post<Token> (this.link.getFullLink('/auth/convert-token/'), params);

  }

  getToken(username: string, password: string): Observable<Token> {
      const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);
      return this.http.post<Token> (this.link.getFullLink('/api/o/token/'), params);
  }

  refreshToken(refreshToken: string): Observable<Token> {
    const params = new HttpParams()
    .set('grant_type', 'refresh_token')
    .set('refresh_token', refreshToken)
    .set('client_id', 'qraxiS3pvi9CSGFdESsuNrE8qWNQCgX6fRZWLL7z')
    // tslint:disable-next-line:max-line-length
    .set('client_secret', 'SNfx4yXgekd52QWLkSkqjrX1C7EoxL6UW594t3lkmt5awvPbt0rVf9iLqjr490IHnr8zDBCeoyh41hixo9u4cH9sWiSEL3Ia0Oy6fRpRrTR1UVcVjGrpVUldNZHR3wdA');

    return this.http.post<Token> (this.link.getFullLink('/api/o/token/'), params);
  }

  saveProgress(lessonId: number, courseId: number, currentTime: number): Observable<any> {

    const curr = Math.floor(currentTime);

    const params = new HttpParams()
    .set('course_id', courseId.toString())
    .set('lesson_id', lessonId.toString())
    .set('duration', curr.toString())
    .set('device', 'web');


//{'course_id' : courseId, 'lesson_id' : lessonId, 'duration': curr }
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(this.link.getFullLink('/api/save-progress/'), params);
  }
}
