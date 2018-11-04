import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'src/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
