import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from '../MyComponent/home/home.component';
import { AboutComponent } from '../MyComponent/about/about.component';
import { LocationComponent } from '../MyComponent/location/location.component';
import { ServiceComponent } from '../MyComponent/service/service.component';
import { BlogComponent } from '../MyComponent/blog/blog.component';


const appRouts: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location', component: LocationComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'blog', component: BlogComponent },
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
