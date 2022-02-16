import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from '../MyComponent/home/home.component';
import { AboutComponent } from '../MyComponent/about/about.component';
import { LocationComponent } from '../MyComponent/location/location.component';
import { ServiceComponent } from '../MyComponent/service/service.component';
import { BlogComponent } from '../MyComponent/blog/blog.component';
import { Home2Component } from '../MyComponent/home2/home2.component';
import { Home3Component } from '../MyComponent/home3/home3.component';
import { Pages1Component } from '../MyComponent/pages1/pages1.component';
import { Pages2Component } from '../MyComponent/pages2/pages2.component';
import { Pages3Component } from '../MyComponent/pages3/pages3.component';
import { Service2Component } from '../MyComponent/service2/service2.component';
import { Service3Component } from '../MyComponent/service3/service3.component';
import { GalleryComponent } from '../MyComponent/gallery/gallery.component';
import { Gallery2Component } from '../MyComponent/gallery2/gallery2.component';
import { ContactComponent } from '../MyComponent/contact/contact.component';




const appRouts: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'home3', component: Home3Component },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pages1', component: Pages1Component },
  { path: 'pages2', component: Pages2Component },
  { path: 'pages3', component: Pages3Component },
  { path: 'location', component: LocationComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service2', component: Service2Component },
  { path: 'service3', component: Service3Component },
  { path: 'service3', component: Service3Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery2', component: Gallery2Component },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  //declarations: [],
  imports: [
    RouterModule.forRoot(appRouts)
    // CommonModule
  ],

  exports: [RouterModule]

})
export class AppRoutingModule { }
