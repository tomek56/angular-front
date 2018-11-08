import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HomePage } from 'src/app/models/homepage';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  featured_course: Array<Course>;

  constructor(private httpService: HttpService) {
    this.getCourses();
   }

  ngOnInit() {
  }

  getCourses() {

    this.httpService.getHomePageCourses().subscribe(data => {
      this.featured_course = data.featured_course;
    });


  }
}
