import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private drawerVisible = true;

  @Input()
  drawer: boolean = false;

  @Input()
  sidenav: MatSidenav;

  @Input()
  title: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (!this.drawer) {
      this.drawerVisible = false;
    }
  }

  toggleDrawer() {
    this.sidenav.toggle();
    if (this.drawer) {
      this.drawerVisible = this.sidenav.opened;
    } else {
      this.drawerVisible = false;
    }
  }

  logoutAction() {
    this.auth.logout(true);
  }

}
