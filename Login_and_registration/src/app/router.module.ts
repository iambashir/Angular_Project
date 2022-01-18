import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const appRoutes : Routes = [
    {path : "registration",
    component : RegistrationComponent},
    {path : "login",
     component : LoginComponent
    },
    {path : "welcome",
    component : WelcomeComponent
   }
]

export default appRoutes;