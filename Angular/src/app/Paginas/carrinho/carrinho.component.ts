import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
qtd: number = 0;
jaAdicionado: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  diminuirQtd(){
    this.qtd += this.qtd == 0 ? 0 : -1;
    if(this.qtd == 0) 
      this.jaAdicionado = !this.jaAdicionado
  }

  
  aumentarQtd(){
    this.qtd++;
  }


}
