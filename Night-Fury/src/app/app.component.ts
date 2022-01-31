import { Component } from '@angular/core';


// This is testing purpose code
declare const myFun: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Night-Fury';


  // This is testing purpose code
  callfun() {
    myFun();
  }




}
