import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSkeletonComponent } from './components/dashboard-skeleton/dashboard-skeleton.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardSkeletonComponent],
  bootstrap: [DashboardSkeletonComponent]
})
export class DashboardModule { }
