import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSkeletonComponent } from './components/dashboard-skeleton/dashboard-skeleton.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardSkeletonComponent, NavigationComponent, FirstComponent, SecondComponent],
  bootstrap: [DashboardSkeletonComponent]
})
export class DashboardModule { }
