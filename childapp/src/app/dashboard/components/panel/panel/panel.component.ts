import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { Course } from 'src/app/models/course';

 //#region Methods from JS file
 declare function slickSlider(): any;
 //#endregion

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  courses: Array<Course>;
  coursesByCategories: Array<Array<Course>>;

  constructor(private httpService: HttpService, private helperLink: LinkhelperService) {
    this.getCourses();
   }

  ngOnInit() {
  }

  getCourses() {
    this.httpService.getCourses().subscribe(data => {
      this.courses = data.courses;
      this.splitCourses();
      slickSlider();

    });
  }

  splitCourses() {
    this.coursesByCategories = Array();
    var alreadyAdded:Array<number> = Array();
    for (const course of this.courses) {
      const categoryId = course.category.id;

      if (alreadyAdded.filter(c => c === categoryId).length === 0) {
        alreadyAdded.push(categoryId);
        const coursesByCategory = this.courses.filter(c => c.category.id === categoryId);
        this.coursesByCategories.push(coursesByCategory);
      }



    }
//      this.coursesByCategories = this.courses.

  }


}
