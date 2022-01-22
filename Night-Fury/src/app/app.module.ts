import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ServiceComponent } from './MyComponent/service/service.component';
import { LocationComponent } from './MyComponent/location/location.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
