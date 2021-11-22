import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Produto } from 'src/app/Modelos/produto';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  qtd: number = 0;
  precoTotal: number = 0;
  produtos: Produto[] = [];
  
  constructor(private cartService: CarrinhoService, private prodService: ProdutoService) { 
    this.qtd =  cartService.getCarrinhoCompletoQTD();
  
    cartService.qtdChange.subscribe(value => { 
      this.qtd = value; 
    });
  }
  
  ngOnInit(): void {
    let produtos = this.cartService.getCarrinhoCompleto();
    let produto: Produto = new Produto();
  
    if(produtos)
    {
      produtos.forEach(data => {
        produto = new Produto();
            this.prodService.getProdutoPorID(data.produto).pipe(take(1)).subscribe((produtoAPI: any) => {
              produto = produtoAPI;
              produto.qtd = data.qtd;
              this.precoTotal = this.precoTotal + (produto.qtd * produto.PrecoUnitario)
  
              this.produtos.push(produto)
            })
      })
    }
  } 

}
