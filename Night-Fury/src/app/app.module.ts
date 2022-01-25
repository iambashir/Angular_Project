import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ServiceComponent } from './MyComponent/service/service.component';
import { LocationComponent } from './MyComponent/location/location.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BlogComponent } from './MyComponent/blog/blog.component';
import { Home2Component } from './MyComponent/home2/home2.component';
import { Home3Component } from './MyComponent/home3/home3.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { CareerComponent } from './MyComponent/career/career.component';
import { Pages1Component } from './MyComponent/pages1/pages1.component';
import { Pages2Component } from './MyComponent/pages2/pages2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    LocationComponent,
    BlogComponent,
    Home2Component,
    Home3Component,
    ContactComponent,
    CareerComponent,
    Pages1Component,
    Pages2Component
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
