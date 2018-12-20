import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  courses: Array<Course>;

  constructor(private httpService: HttpService, private helperLink: LinkhelperService) {
    this.getCourses();
   }

  ngOnInit() {
  }

  getCourses() {
    this.httpService.getCourses().subscribe(data => {
      this.courses = data.courses;
      console.log(this.courses);
    });
  }


}
