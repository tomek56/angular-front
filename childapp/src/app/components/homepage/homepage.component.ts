import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private httpService: HttpService) {
    this.getCourses();
   }

  ngOnInit() {
  }

  getCourses() {
    this.httpService.getHomePageCourses().subscribe(data => {
      console.log('z neta');
      console.log(data);
    });
  }
}
