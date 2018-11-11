import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthpageComponent } from './components/authpage/authpage.component';
import { DashboardSkeletonComponent } from './dashboard/components/dashboard-skeleton/dashboard-skeleton.component';

const routes: Routes = [
  {
    path: '',
		component: HomepageComponent
  },
  {
    path: 'login',
		component: AuthpageComponent
  },
  {
    path: 'dashboard',
    component: DashboardSkeletonComponent
  }
	// {
	// 	path: '',
	// 	loadChildren: 'app/app.module#AppModule'
  // },
  // {
	// 	path: 'login',
	// 	loadChildren: 'auth/auth.module#AuthModule'
	// },
	// {
	// 	path: '**',
	// 	redirectTo: '404',
	// 	pathMatch: 'full'
	// }
];


@NgModule(
  {
    imports: [RouterModule.forRoot(routes,
    )],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {}
