import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }
  course: Course;

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      console.log(param.get('id'));
      this.httpService.getCourseDetail(param.get('id')).subscribe(data => {
        //this.categories = data;
        this.course = data;
      });
    });
  }

}
