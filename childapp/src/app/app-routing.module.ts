import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthComponent } from 'src/auth/auth/auth.component';

const routes: Routes = [
  {
    path: '',
		component: HomepageComponent
  },
  {
    path: 'login',
		component: AuthComponent
  }
  // {
  //   path: 'login',
	// 	loadChildren: 'src/auth/auth.module#AuthModule'
  // },
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
