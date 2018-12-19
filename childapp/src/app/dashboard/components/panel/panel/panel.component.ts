import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LinkhelperService } from 'src/app/services/linkhelper.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private httpService: HttpService, private helperLink: LinkhelperService) {
    this.getCourses();

   }

  ngOnInit() {
  }

  getCourses() {
    this.httpService.getHomePageCourses().subscribe(data => {
      this.featured_course = data.featured_course;
    });

  }

}
