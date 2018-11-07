import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HomePage } from '../models/homepage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getHomePageCourses(): Observable<HomePage> {

    return this.http.post<HomePage>('http://127.0.0.1:8000/api/homepage/', {});
  }
}
