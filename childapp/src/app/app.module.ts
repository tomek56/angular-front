import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthpageComponent } from './components/authpage/authpage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpyInterceptor } from './services/interceptor';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

  import { CommonModule } from '@angular/common';
import { NavigationComponent } from './dashboard/components/navigation/navigation.component';
import { DashboardSkeletonComponent } from './dashboard/components/dashboard-skeleton/dashboard-skeleton.component';
import { FirstComponent } from './dashboard/components/first/first.component';
import { SecondComponent } from './dashboard/components/second/second.component';
import { PanelComponent } from './dashboard/components/panel/panel/panel.component';
import { CoursesSliderComponent } from './dashboard/components/panel/components/courses-slider/courses-slider.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { VideoComponent } from './dashboard/components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthpageComponent,
    NavigationComponent,
    DashboardSkeletonComponent,
    FirstComponent,
    SecondComponent,
    PanelComponent,
    CoursesSliderComponent,
    CourseDetailComponent,
    NavBarComponent,
    VideoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
