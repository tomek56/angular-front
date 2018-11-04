import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutRefService } from '../../core/services/layout/layout-ref.service';
import { HeaderService } from '../../core/services/layout/header.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

	constructor(
		private router: Router,
		private layoutRefService: LayoutRefService,
		public headerService: HeaderService,
		public loader: LoadingBarService
	) {}

  ngOnInit() {
  }

}
