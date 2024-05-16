import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username="jyoti"
loginfailure=false

constructor(private router:Router, private hardcodedAuthentication:HardcodedAuthenticationService){

}
handleLogin(){
console.log("hi");
var inputValue = (<HTMLInputElement>document.getElementById("uname")).value;
//console.log(inputValue);
if(this.hardcodedAuthentication.authenticate(inputValue)){
  this.loginfailure = false;
  this.router.navigate(['welcome/in28minutes'])
}else{
  this.loginfailure = true;
 // this.router.navigate(['error'])
}
}

}
