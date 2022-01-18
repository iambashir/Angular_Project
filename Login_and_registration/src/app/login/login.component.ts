import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  arr = ["a", "b", "c"];

  constructor(private userSerice: UserService, private route : Router) { }

  ngOnInit() {
  }

  userData;
  userStatus;
  currentUser;
  currentUserPassword;
  loginUser(data){
    this.currentUser = data.username;
    this.currentUserPassword = data.password;

    this.userSerice.loginUser(data).subscribe(
      (response) => {
        this.userData = response;

        for(let i = 0; i<this.userData.length; i++){
          if(data.username == this.userData[i].username){
            if(data.password == this.userData[i].password){
              this.userStatus = "User Login Successful";
              this.route.navigate(["welcome"]);
            }else{
              this.userStatus = "User Username/Password doesn't match";
            }
          }
        }
        
      },
      (error) => {
        console.log("data couldn't pull");
      }
    );
  }

}
