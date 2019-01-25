import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  form = new RegisterForm();

  errorRegister = false;
  subbmitted = false;
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router, private service: HttpService
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/auth/login/']);
  }


  onSubmit(loginForm: NgForm) {
    this.subbmitted = true;
    console.log(loginForm.status);
    
    if (loginForm.status === 'VALID') {
      this.register();
    }

  }


  register() {

    this.service.registerUser(this.form.email, this.form.password).subscribe(
      data => {
        this.router.navigate(['/panel/']);
      },
      error => {
        console.log(error);
        this.errorMessage = 'Wystąpił błąd podczas rejestracji';
        this.errorRegister = true;

        if (error.status === 470) {
          this.errorMessage = 'Podany e-mail jest już wykorzystywany';
        }
        if (error.status === 473) {
          this.errorMessage = 'Podany e-mail nie jest poprawny';
        }
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

