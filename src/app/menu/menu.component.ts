import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  userLoggedin: boolean = false;

  constructor(public hardcodedAuthenticatedUser:HardcodedAuthenticationService){}



}
