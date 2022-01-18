import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './MyComponent/nav-bar/nav-bar.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { SideNavBarComponent } from './MyComponent/side-nav-bar/side-nav-bar.component';
import { AdvertComponent } from './MyComponent/advert/advert.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateEmployeeComponent } from './MyComponent/create-employee/create-employee.component';
import { EmployeeListComponent } from './MyComponent/employee-list/employee-list.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { MainBodyComponent } from './MyComponent/main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SideNavBarComponent,
    AdvertComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
