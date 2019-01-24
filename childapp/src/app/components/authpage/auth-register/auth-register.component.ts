import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  form = new RegisterForm();

  errorRegister = false;
  subbmitted = false;

  constructor(private auth: AuthService, private router: Router, private service: HttpService
    ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/auth/login/']);
  }

  register() {
    console.log(this.form.email);
    console.log(this.form.password);
    this.service.registerUser(this.form.email, this.form.password).subscribe(
      data => {
        console.log("data");

      },
      error => {
        if (error.status === 470) {
          console.log("status 470");
        }
        console.log("error");
        console.log(error);

      }
    );

  }

  registerByFacebook() {

  }
}

class RegisterForm {
  constructor(
    public email?: string,
    public password?: string) { }
}

