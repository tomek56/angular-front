import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childapp';
  subscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0, 0));
  }

}
