import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {  CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private authService: AuthService, 
      private router: Router) { 
  }

  canActivate(route: any, state: RouterStateSnapshot){

    // verifico se o usuario está logado ou não
    if(this.authService.estaLogado())
      return true;

      // não está então deve!
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}); 
      
      return false;

  }

}
