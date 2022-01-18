import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { CreateEmployeeComponent } from './MyComponent/create-employee/create-employee.component';
import { EmployeeListComponent } from './MyComponent/employee-list/employee-list.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { AboutComponent } from './MyComponent/about/about.component';

const appRoutes: any = [

{path: 'home', component: HomeComponent},
{path: 'create-employee', component: CreateEmployeeComponent},
{path: 'employee-list', component: EmployeeListComponent},
{path: 'contact', component: ContactComponent},
{path: 'about', component: AboutComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},


];



@NgModule({
  imports: [

RouterModule.forRoot(appRoutes)

  ],
exports: [RouterModule]
})
export class AppRoutingModule { }
