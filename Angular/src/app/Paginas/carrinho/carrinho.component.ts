import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { Produto } from 'src/app/Modelos/produto';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
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
          this.prodService.getProdutoPorID(data.produto).pipe(take(1)).subscribe(produtoAPI => {
            produto = produtoAPI;
            produto.qtd = data.qtd;
            this.precoTotal = this.precoTotal + (produto.qtd * produto.PrecoUnitario)

            this.produtos.push(produto)
          })
    })
  }
}

  diminuirQtd(produto: Produto){
    produto.qtd += produto.qtd == 0 ? 0 : -1;
    this.cartService.adicionarAoCarrinho(produto, produto.qtd)

    let index = this.produtos.findIndex(item => item.ProdutoID == produto.ProdutoID);
    
    this.precoTotal = this.precoTotal - produto.PrecoUnitario

    if(produto.qtd == 0)      
      {
        this.produtos.splice(index,1)
      }
    else
      {
        this.produtos[index] = produto;
      }        
  }
  
  aumentarQtd(produto: Produto){    
    produto.qtd = produto.qtd+1;
    this.cartService.adicionarAoCarrinho(produto, produto.qtd+1);
    
    this.precoTotal = this.precoTotal + produto.PrecoUnitario

    let index = this.produtos.findIndex(item => item.ProdutoID == produto.ProdutoID);

    this.produtos[index].qtd = produto.qtd;    
  }

}
