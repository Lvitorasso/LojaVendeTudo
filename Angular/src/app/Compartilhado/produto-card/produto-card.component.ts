import { CarrinhoService } from './../../services/carrinho/carrinho.service';
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
  qtd: number = 0;
  
  constructor(private carService: CarrinhoService) { 

  }

  ngOnInit(): void {
    let produtos = this.carService.getCarrinhoCompleto();

    if(produtos)
    {
      produtos.forEach(data => {
        if(data.produto == this.produto.ProdutoID)
          {
            this.jaAdicionado = true;
            this.qtd = data.qtd;
          } 
      })
    }
  }

  adicionar(produto: Produto){    
    this.qtd = 1;
    this.jaAdicionado = !this.jaAdicionado

    this.carService.adicionarAoCarrinho(produto, 1)
  }

  diminuirQtd(produto: Produto){

    this.qtd += this.qtd == 0 ? 0 : -1;
    this.carService.adicionarAoCarrinho(produto, this.qtd)
    if(this.qtd == 0) 
      this.jaAdicionado = !this.jaAdicionado
  }

  
  aumentarQtd(produto: Produto){    
    this.qtd++;
    this.carService.adicionarAoCarrinho(produto, this.qtd);
  }


}
