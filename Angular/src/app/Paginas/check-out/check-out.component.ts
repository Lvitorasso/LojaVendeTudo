import { PedidosService } from 'src/app/services/pedido/pedido.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Produto } from 'src/app/Modelos/produto';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Pedido } from 'src/app/Modelos/pedido';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {  
  constructor(private cartService: CarrinhoService, private prodService: ProdutoService,
    private pedService: PedidosService) { 
    
  }

  ngOnInit(): void {
  }

 async realizarPedido(data: any)
  {  
    let pedido = new Pedido();
    let produtosCarrinho = this.cartService.getCarrinhoCompleto();
  
    if(produtosCarrinho)
    {
      produtosCarrinho.forEach(dataForEach => {
        let produto = new Produto();
            this.prodService.getProdutoPorID(dataForEach.produto).pipe(take(1)).subscribe(produtoAPI => {
              produto = produtoAPI;
              produto.qtd = dataForEach.qtd;
  
              pedido.Produtos.push(produto)
            })
      })    
 
      pedido.Endereco = data.Endereco;
      pedido.Nome = data.Nome;   
      
      console.log( JSON.parse(JSON.stringify(pedido)))

     this.pedService.realizarPedido(pedido).subscribe(response =>{
       console.log('chamei hein')
     });
    }
    else
    {
      console.log('erro')
    }
  }

}
