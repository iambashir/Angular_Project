import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-uper-bar',
  templateUrl: './header-uper-bar.component.html',
  styleUrls: ['./header-uper-bar.component.css']
})
export class HeaderUperBarComponent implements OnInit {

  dateMessage: string;

  constructor() {
    setInterval(() => {
      let currentDate =  new Date();
      this.dateMessage = currentDate.toDateString() + "  and Current Time " + currentDate.toLocaleTimeString();
    } , 1000 );



   }

  ngOnInit() {
  }

}
