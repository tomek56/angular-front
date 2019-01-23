import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
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

  getCourseLessons(course: Course): number {
    let count = 0;
    // TODO po zrobieniu w API
    return 2;
    course.sections.forEach(section => {
      section.lessons.forEach(lesson => {
        count = count + 1;
      });
    });

    return count;
  }

  goToProgressCourse(course: Course) {

    if (course.lesson_to_continiue) {
      this.router.navigate(['/course/', course.slug, course.lesson_to_continiue.lesson.id]);

    } else {
      this.router.navigate(['/course/', course.slug]);
    }

  }

  getProgressBarWidth(course: Course): string {
    let width = (250 * (course.progress / 100));

    return width + 'px';
  }
}
