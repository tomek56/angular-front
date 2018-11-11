import { Component, OnInit, Input } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {

  @Input() action = 'login';
  classses: any = 'm-grid m-grid--hor m-grid--root m-page';

  constructor(private auth: NbAuthService) { }

  ngOnInit() {
  }

  login() {
    console.log('asd');
  //  this.auth.authenticate('tokenauth', {});
  }

  register() {
 //   this.auth.authenticate()
    this.action = 'register';
  }

}
