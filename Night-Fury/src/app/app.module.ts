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
import { ManuComponent } from './MyComponent/manu/manu.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { Pages3Component } from './MyComponent/pages3/pages3.component';
import { GalleryComponent } from './MyComponent/gallery/gallery.component';
import { Service2Component } from './MyComponent/service2/service2.component';
import { Service3Component } from './MyComponent/service3/service3.component';
import { Gallery2Component } from './MyComponent/gallery2/gallery2.component';

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
    Pages2Component,
    ManuComponent,
    FooterComponent,
    HeaderComponent,
    Pages3Component,
    GalleryComponent,
    Service2Component,
    Service3Component,
    Gallery2Component
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
