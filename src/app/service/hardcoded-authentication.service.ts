import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string){
    if(username==="jyoti"){
      console.log(username)
      sessionStorage.setItem("authenticatorUser",username)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
let user=sessionStorage.getItem("authenticatorUser");
return !(user===null)
  }
}
