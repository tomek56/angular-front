import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard-skeleton',
  templateUrl: './dashboard-skeleton.component.html',
  styleUrls: ['./dashboard-skeleton.component.css']
})
export class DashboardSkeletonComponent implements OnInit {

  private drawerVisible = true;
  @ViewChild('drawer') sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
    this.sidenav.toggle();
  }

  toggleDrawer() {
    this.sidenav.toggle();
    this.drawerVisible = this.sidenav.opened;

  }
}
