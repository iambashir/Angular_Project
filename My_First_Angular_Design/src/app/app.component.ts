import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


userData: Array <any> = [];




  //Craete a constructor to get user services data
  constructor(
    private userService: UserService
  ) {

    this.userService.getAllUser().subscribe(

      (response) => {
        console.log(response)
        this.userData = response;

      }

    )

  }

}
