import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/Modelos/produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})


export class ProdutoCardComponent implements OnInit {
  
  @Input('produto')produto: Produto = new Produto();
  @Input('botao')botao: Boolean = false;
  @Input('jaAdicionado')jaAdicionado: Boolean = false;
  
  constructor(
  ) { 
  }

  ngOnInit(): void {
  }

}
