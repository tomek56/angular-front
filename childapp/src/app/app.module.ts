import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthpageComponent } from './components/authpage/authpage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpyInterceptor } from './services/interceptor';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthpageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    DashboardModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
