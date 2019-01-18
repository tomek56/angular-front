import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,
    ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/auth/login/']);

  }
}
