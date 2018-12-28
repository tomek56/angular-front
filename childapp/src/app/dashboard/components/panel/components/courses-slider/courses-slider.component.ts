import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { LinkhelperService } from 'src/app/services/linkhelper.service';

@Component({
  selector: 'app-courses-slider',
  templateUrl: './courses-slider.component.html',
  styleUrls: ['./courses-slider.component.css']
})
export class CoursesSliderComponent implements OnInit {

  @Input()
  courses: Array<Course>;

  constructor(private helperLink: LinkhelperService) { }

  ngOnInit() {
  }

  getUrl(course: Course): string {
    return this.helperLink.getFullLink(course.image_285x437);
  }

  getTitle(): string {
    return this.courses[0].category.name;
  }
}
