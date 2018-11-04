import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {

  @Input() action = 'login';
  classses: any = 'm-grid m-grid--hor m-grid--root m-page';

  constructor() { }

  ngOnInit() {
  }

  register() {
    this.action = 'register';
  }

}
