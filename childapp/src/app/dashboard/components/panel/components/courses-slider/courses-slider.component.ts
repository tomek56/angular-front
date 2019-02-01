import { Component, OnInit, Input } from '@angular/core';
import { Course, CourseModel } from 'src/app/models/course';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-slider',
  templateUrl: './courses-slider.component.html',
  styleUrls: ['./courses-slider.component.css']
})
export class CoursesSliderComponent implements OnInit {

  @Input()
  courses: Array<Course>;

  @Input()
  title: string;

  @Input()
  progress: boolean;

  constructor(private helperLink: LinkhelperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  getUrl(course: Course): string {
    return this.helperLink.getFullLink(course.image_285x437);
  }

  getTitle(): string {
    return this.courses[0].category.name;
  }

  goToCourse(course: Course) {

  }

  getCourseLevel(course: Course) {
    return CourseModel.getCourseLevel(course);
  }

  getCourseLessons(course: Course): number {
    return course.number_of_lessons;
  }

  goToProgressCourse(course: Course) {

    if (course.lesson_to_continiue) {
      // this.router.navigate(['/course/', this.course.slug, lesson.id], { queryParams: { t: Math.floor(lesson.progress.c_t) } });

      // tslint:disable-next-line:max-line-length
      this.router.navigate(['/course/', course.slug, course.lesson_to_continiue.lesson.id],  { queryParams: { t: Math.floor(course.lesson_to_continiue.time_to_continiue) } });

    } else {
      this.router.navigate(['/course/', course.slug]);
    }

  }

  getProgressBarWidth(course: Course): string {
    let width = (250 * (course.progress / 100));

    return width + 'px';
  }
}
