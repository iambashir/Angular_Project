import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './MyComponent/header/header.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { NavManuComponent } from './MyComponent/nav-manu/nav-manu.component';
import { AdvertiseComponent } from './MyComponent/advertise/advertise.component';
import { HeaderUperBarComponent } from './MyComponent/header-uper-bar/header-uper-bar.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { OrderComponent } from './Mycomponent/order/order.component';
// import { AppRoutingModule } from './AppRoutingModule/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavManuComponent,
    AdvertiseComponent,
    HeaderUperBarComponent,
    HomeComponent,
    ContactComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      
// Setting path/link to go another page after fixing the routerLink in Link Button in html page
      {path: 'home', component: HomeComponent },
      {path: 'contact', component: ContactComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full' },


    ])
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
