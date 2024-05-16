import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private hardcodedAuthenticated:HardcodedAuthenticationService){}
  ngOnInit(): void {
  sessionStorage.removeItem("authenticatorUser");
  }

}
