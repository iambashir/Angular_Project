import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }


  email :string;
  password: string;

userData(value:any){
// this.email = value.email;
// this.password = value.password;

alert(this.email + " " + this.password)
console.log(this.email + this.password);
}


}
