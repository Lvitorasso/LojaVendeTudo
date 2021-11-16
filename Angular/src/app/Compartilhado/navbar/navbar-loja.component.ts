import { CarrinhoService } from './../../services/carrinho/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'navbarloja',
  templateUrl: './navbar-loja.component.html',
  styleUrls: ['./navbar-loja.component.css']
})
export class NavbarLojaComponent implements OnInit {
  usuario: string = "";
  carrinhoQTD: any;
  _subscription: any;

  constructor(public authService: AuthService, private cartService: CarrinhoService) { 
    this.carrinhoQTD =  cartService.getCarrinhoCompletoQTD();

    cartService.qtdChange.subscribe(value => { 
      this.carrinhoQTD = value; 
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.deslogar();
  }

}
