import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Course } from 'src/app/models/course';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CourseSection } from 'src/app/models/courseSection';
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

  @ViewChild('drawer') sidenav: MatSidenav;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.sidenav.toggle();

    this.route.paramMap.subscribe((param: Params) => {
      console.log(param.get('id'));
      this.httpService.getCourseDetail(param.get('id')).subscribe(data => {
        this.course = data;
        this.showMenu = true;
        this.drawMenu();
      });
    });

  }

  drawMenu() {

  }

  toggleMenu(section: CourseSection): void {

  }

  isSectionCollapsed(section: CourseSection): boolean {
    return true;
  }

  toggleMenu() {
    console.log("Asd");
  }
}
