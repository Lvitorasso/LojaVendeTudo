import { ProdutoReq } from './../../Modelos/produtoReq';
import { Produto } from './../../Modelos/produto';
import { PedidosService } from 'src/app/services/pedido/pedido.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { take } from 'rxjs/operators';
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
    let count = 0

    if(produtosCarrinho)
    {
      // produtosCarrinho.forEach(dataForEach => {
      //   let produto = new Produto();
      //       this.prodService.getProdutoPorID(dataForEach.produto).pipe(take(1)).subscribe(produtoAPI => {
      //         produto = produtoAPI;
      //         produto.qtd = dataForEach.qtd;
  
      //         pedido.Produtos.push(JSON.stringify(produto))
      //       })           
      // })  
      
     const promesa = new Promise(async (resolve) => 
     { 
       try
       {
          for(let i = 0; i < produtosCarrinho.length; i++) 
          {
                let produto = new ProdutoReq();

                   produto.ProdutoID = produtosCarrinho[i].produto;
                   produto.qtd = produtosCarrinho[i].qtd;
              
                   pedido.Produtos.push(JSON.stringify(produto))                
          }
        } 
        catch (e) 
        {
          console.log(e);
        } 
        finally 
        {
            resolve("Promise Resolved");
        }
      })
    
    promesa.then(() => 
    {    
      pedido.Endereco = data.Endereco;
      pedido.Nome = data.Nome;   
      

     this.pedService.realizarPedido(pedido).subscribe(response =>
      {
       console.log('chamei hein')
      });
    })
    }
    else
    {
      console.log('erro')
    }
  }

}