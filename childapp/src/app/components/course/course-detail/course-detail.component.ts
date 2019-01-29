import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LinkhelperService } from 'src/app/services/linkhelper.service';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: HttpService, private linker: LinkhelperService) { }
  course: Course;

  @ViewChild('descriptionContainer') dataContainer: ElementRef;

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      console.log(param.get('id'));
      this.httpService.getCourseDetail(param.get('id')).subscribe(data => {
        // this.categories = data;
        this.course = data;
        this.dataContainer.nativeElement.innerHTML = this.course.description.description
      });
    });
  }

  getThumbCourse(): string {
    console.log("link");
    console.log(this.linker.getFullLink(this.course.image_285x437))
    return this.linker.getFullLink(this.course.image_285x437);
  }

  goToLesson(lesson: Lesson) {

  }

  getLessonNumber(lesson: Lesson): number {
    let index = 1;
    for (const section of this.course.sections) {
      for (const l of section.lessons) {
        if (l.id === lesson.id) {
          return index;
        }
        index = index + 1;
      }
    }

    return index;
  }

  getIntroId(): number {
    return this.course.sections[0].lessons[0].id;
  }

  isFreeLesson(lesson: Lesson): boolean {
    return lesson.free;
  }
}
