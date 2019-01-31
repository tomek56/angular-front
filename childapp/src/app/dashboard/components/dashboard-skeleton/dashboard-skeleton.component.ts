import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Course } from 'src/app/models/course';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CourseSection } from 'src/app/models/courseSection';
import { Lesson } from 'src/app/models/lesson';
import { TimeHelperService } from 'src/app/services/time-helper.service';
import { httpFactory } from '@angular/http/src/http_module';
import { VideoComponent } from '../video/video.component';



@Component({
  selector: 'app-dashboard-skeleton',
  templateUrl: './dashboard-skeleton.component.html',
  styleUrls: ['./dashboard-skeleton.component.css']
})
export class DashboardSkeletonComponent implements OnInit {

  private course: Course;
  private showMenu = true;
  private collapsedSections: Array<number> = Array();
  private currentLesson: number;
  currentLessonObj: Lesson;
  sources: Array<string>;

  @ViewChild('dataContainer') dataContainer: ElementRef;
  @ViewChild('drawer') sidenav: MatSidenav;
  @ViewChild('videoContainer') videoContainer: VideoComponent;




  constructor(private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private timeHelper: TimeHelperService
    ) {
      this.sources = [];
    }

  getCurrentLesson(): Lesson {
    let lesson: Lesson;
    for (const section of this.course.sections) {
      for (const l of section.lessons) {
        if (l.id == this.currentLesson) {
          lesson =  l;
        }
      }
    }
    return lesson;
  }

  ngOnInit() {
    this.sidenav.toggle();
    this.loadLesson();
  }

  ngOnDestroy() {
    if (this.videoContainer !== undefined ) {
      this.videoContainer.emitSaveProgressEvent();
    }
  }

  goToLesson(lesson: Lesson) {
    this.router.navigate(['/course/', this.course.slug, lesson.id]);
    this.loadLesson();

  }

  loadLesson() {

    this.showMenu = false;

    this.route.paramMap.subscribe((param: Params) => {

      this.currentLesson = param.get('lesson');
      if (this.course === undefined) {

        this.httpService.getCourseDetail(param.get('id')).subscribe(data => {

          this.course = data;

          this.setCurrentLesson();

        },
          error => {
        });

      } else {
          this.setCurrentLesson();
      }
    });
  }

  setCurrentLesson() {
    for (const section of this.course.sections) {
      for (const lesson of section.lessons) {
        if (lesson.id == this.currentLesson) {
          this.collapsedSections.push(section.id);
        }
      }
    }

    if (this.videoContainer !== undefined ) {
      this.videoContainer.emitSaveProgressEvent();
    }

    this.currentLessonObj = this.getCurrentLesson();
    this.sources = [this.currentLessonObj.movie.url];
    this.dataContainer.nativeElement.innerHTML = this.currentLessonObj.description;
    this.showMenu = true;
  }

  getTime(lesson: Lesson): string {
    return this.timeHelper.getDuration(lesson.movie.duration);
  }

  getTitle(): string {
    if (this.showMenu) {
      return this.currentLessonObj.name;
    }
    return '';

  }
  isCurrentLesson(lesson: Lesson): boolean {
    // tslint:disable-next-line:triple-equals
    return (lesson.id == this.currentLesson);
  }

  isWatchedLesson(lesson: Lesson): boolean {

    if (lesson.progress.c_t > 0) {
      return (lesson.progress.c_t + 10) > lesson.progress.l_d;
    }

    return false;
  }

  getLessonClass(lesson: Lesson): string {
    if (this.isCurrentLesson(lesson)) {
      return 'current-played';
    }

    if (this.isWatchedLesson(lesson)) {
      return 'watched';
    }

    return 'to-watch-played';
  }

  toggleMenu(section: CourseSection): void {

    if (this.isSectionCollapsed(section)) {
      this.collapsedSections = this.collapsedSections.filter(sectionId => sectionId !== section.id);
    } else {
      this.collapsedSections = Array();
      this.collapsedSections.push(section.id);
    }

  }

  isSectionCollapsed(section: CourseSection): boolean {
    return !(this.collapsedSections.filter(sectionId => sectionId === section.id).length === 0);
  }

  goToCourse() {

    if (this.videoContainer !== undefined ) {
      this.videoContainer.emitSaveProgressEvent();
    }

    this.router.navigate(['/course/', this.course.slug]);

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

  videoEndedEvent(event) {
    const l = this.getNextLesson();
    if (l === undefined) {
    } else {
      this.goToLesson(l);
    }
  }

  saveProgressEvent(event) {
    this.httpService.saveProgress(event.lessonId, this.course.id, event.currentTime).subscribe(
        data => {
        },
        error => {
        }
      );
  }

  getNextLesson(): Lesson | undefined {
    let next = false;

    for (const section of this.course.sections) {
      for (const l of section.lessons) {
        if (next) {
          return l;
        }
        if (l.id == this.currentLesson) {
          next = true;
        }
      }
    }

    return undefined;
  }

  getLessonName(): string {
    return 'sd';
  }

  saveProgress() {

  }
}
