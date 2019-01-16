import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthpageComponent } from './components/authpage/authpage.component';
import { DashboardSkeletonComponent } from './dashboard/components/dashboard-skeleton/dashboard-skeleton.component';
import { PanelComponent } from './dashboard/components/panel/panel/panel.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { AuthContainerComponent } from './components/authpage/auth-container/auth-container.component';


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
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'course/:id/:lesson',
    component: DashboardSkeletonComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'auth',
    component: AuthContainerComponent,
    children: [
      {
        path: 'login',
        component: AuthpageComponent
      }
    ]
  },
];


@NgModule(
  {
    imports: [RouterModule.forRoot(routes,
    )],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {}
