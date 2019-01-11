import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Course } from 'src/app/models/course';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CourseSection } from 'src/app/models/courseSection';
import { Lesson } from 'src/app/models/lesson';
  // //#region Methods from JS file
  // declare function dropdownSet(): any;
  // //#endregion


@Component({
  selector: 'app-dashboard-skeleton',
  templateUrl: './dashboard-skeleton.component.html',
  styleUrls: ['./dashboard-skeleton.component.css']
})
export class DashboardSkeletonComponent implements OnInit {

  private course: Course;
  private showMenu = false;
  private collapsedSections: Array<number> = Array();
  private currentLesson: number;

  @ViewChild('drawer') sidenav: MatSidenav;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.sidenav.toggle();

    this.route.paramMap.subscribe((param: Params) => {

      this.currentLesson = param.get('lesson');

      this.httpService.getCourseDetail(param.get('id')).subscribe(data => {

        this.course = data;

        for (const section of this.course.sections) {
          for (const lesson of section.lessons) {
            if (lesson.id == this.currentLesson) {
              this.collapsedSections.push(section.id);
            }
          }
        }

        this.showMenu = true;
        this.drawMenu();

      });
    });

  }

  isCurrentLesson(lesson: Lesson): boolean {
    // tslint:disable-next-line:triple-equals
    return (lesson.id == this.currentLesson);
  }

  getLessonClass(lesson: Lesson): string {


    if (this.isCurrentLesson(lesson)) {
      console.log('dobry styl');
      return 'current-played';
    }
    return 'to-watch-played';
  }

  drawMenu() {

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
    console.log("Asd");

    this.router.navigate(['/course/', this.course.slug]);
  // toggleMenu() {
  //   console.log("Asd");
  // }
  }
}
