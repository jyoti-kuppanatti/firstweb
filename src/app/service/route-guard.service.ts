import { Injectable,inject  } from '@angular/core';
import {  Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, GuardResult, MaybeAsync } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthentication:HardcodedAuthenticationService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
   if(this.hardcodedAuthentication.isUserLoggedIn())
    return true;

this.router.navigate(['login']);
  return false
  }

 
}
