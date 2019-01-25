import { Component, OnInit, Input } from '@angular/core';
import { AuthHttpService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {

  subbmitted = false;
  errorLogin = false;

  message = new TemplateMessage();

  constructor(private auth: AuthHttpService, private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    this.subbmitted = true;
    if (loginForm.status === 'VALID') {
      this.login();
    }

  }

  login() {
    this.errorLogin = false;

    this.auth.authorize(this.message.username, this.message.password).subscribe(data => {
      this.router.navigate(['/panel']);
    },
    errror => {
      this.errorLogin = true;
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register/']);

  }

  register() {

 //   this.auth.authenticate()
    //this.action = 'register';
  }


}

class TemplateMessage {
  constructor(
    public username?: string,
    public password?: string) { }
}
