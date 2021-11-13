import { AuthService } from 'src/app/services/auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }


 canActivate(){
  let usuario = this.authService.usuarioAtual;

  if(JSON.stringify(usuario) == '{}')
    return false;

   if(this.authService.usuarioAtual.role.includes('admin'))
      return true;

      this.router.navigate(['/no-access']);

  return false;
 }
}
