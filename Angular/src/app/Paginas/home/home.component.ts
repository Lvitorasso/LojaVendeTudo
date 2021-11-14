import { take } from 'rxjs/operators';
import { ProdutoService } from './../../services/produto/produto.service';
import { Produto } from 'src/app/Modelos/produto';

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { localStorageService } from 'src/app/services/localStorageService';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(public authService: AuthService, private localdb: localStorageService,
    private prodService: ProdutoService) { 
  }

 logout(){
   this.authService.deslogar();
 }

}
