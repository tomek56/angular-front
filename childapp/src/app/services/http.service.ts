import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getHomePageCourses(): Observable<Array<Course>> {

    return this.http.post<Array<Course>>('http://127.0.0.1:8000/api/homepage/', {});
  }
}
