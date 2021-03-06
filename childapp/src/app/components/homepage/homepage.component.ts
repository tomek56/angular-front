import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HomePage } from 'src/app/models/Homepage';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { Category } from 'src/app/models/category';

  //#region Methods from JS file
  declare function slickSlider(): any;
  //#endregion

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {




  show = false;
  featured_course: Array<Course>;
  categories: Array<Category>;

  constructor(private httpService: HttpService, private helperLink: LinkhelperService) {
    this.getCategories();

   }

  ngOnInit() {
    //this.show = false;

    this.getCourses();

  }

  getUrl(course: Course): string {
    // return 'https://www.imh.com.sg/uploadedImages/Common/VisitIMH1.jpg';
    var link = this.helperLink.getFullLink(course.image_285x437);
    return link;
  }

  getTagColor(course: Course): string {
    return course.category.color;
  }

  getCategories() {
    // this.httpService.getCategories().subscribe(data => {
    //   this.categories = data;
    // });
  }

  getCourses() {

    this.httpService.getHomePageCourses().subscribe(data => {
      this.featured_course = data.featured_course;
      this.show = true;

      slickSlider();

    });
  }
}
