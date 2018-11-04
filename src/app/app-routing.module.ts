import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ErrorPageComponent } from './content/pages/snippets/error-page/error-page.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'app/homepage/homepage.module#HomepageModule',
	},
	{
		path: 'dashboard',
		loadChildren: 'app/content/pages/pages.module#PagesModule'
	},
	{
		path: 'login',
		canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	},

	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
