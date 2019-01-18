import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {

  @Input() action = 'login';
  classses: any = 'm-grid m-grid--hor m-grid--root m-page';

  constructor(private auth: AuthService, private router: Router,
    ) { }

  ngOnInit() {
  }

  login() {
    console.log('asd');
    this.auth.authorize('tomek', 'qwerty123').subscribe(data => {
      console.log(data);
      this.router.navigate(['/dashboard']);

    });
  //  this.auth.authenticate('tokenauth', {});
  }

  goToRegister() {
    this.router.navigate(['/auth/register/']);

  }

  register() {

 //   this.auth.authenticate()
    this.action = 'register';
  }


}
