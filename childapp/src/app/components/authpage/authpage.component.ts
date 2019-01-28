import { Component, OnInit, Input } from '@angular/core';
import { AuthHttpService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {

  subbmitted = false;
  errorLogin = false;

  message = new TemplateMessage();
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private auth: AuthHttpService,
    private router: Router,
    private provider: AuthService,
    private service: HttpService
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

  registerFb() {
    this.provider.signIn(FacebookLoginProvider.PROVIDER_ID);

    this.provider.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        this.auth.fbAuthorization(this.user.authToken).subscribe(
          data => {
            this.router.navigate(['/panel']);
          },
          error => {
            this.errorLogin = true;
          }
        );
      }
    });

  }



}

class TemplateMessage {
  constructor(
    public username?: string,
    public password?: string) { }
}
