import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { localStorageService } from 'src/app/services/localStorageService';


@Component({
  selector: 'navbarloja',
  templateUrl: './navbar-loja.component.html',
  styleUrls: ['./navbar-loja.component.css']
})
export class NavbarLojaComponent implements OnInit {
  usuario: any;

  constructor(public authService: AuthService, private localdb: localStorageService) { 
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.deslogar();
  }

}
