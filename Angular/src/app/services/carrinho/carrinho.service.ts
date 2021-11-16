import { Produto } from './../../Modelos/produto';
import { Injectable } from '@angular/core';
import { localStorageService } from '../localStorageService';
import { of, Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class CarrinhoService {

  qtd: number = 0;
  item: any;
  qtdChange: Subject<number> = new Subject<number>();
  
  constructor(private localdb: localStorageService) {
  }

  adicionarAoCarrinho(produto: Produto,qtd: number){
    this.item = this.localdb.get('produtoCarrinho'+produto.ProdutoID)

    if(this.item)//verifico se já esta no carrinho
    {
     this.localdb.remove('produtoCarrinho'+produto.ProdutoID)
    }
    

    this.localdb.set('produtoCarrinho'+produto.ProdutoID,produto.ProdutoID+"/"+qtd)

    this.change();
  }

  getCarrinhoCompleto(){
    let carrinhoLocalDB = this.localdb.getAll();
    let Carrinho = {
      produto : 0,
      qtd : 0 
    };
    let CarrinhoCompleto: any[] = [];

    carrinhoLocalDB?.forEach(data => {

      Carrinho = {
        produto : 0,
        qtd : 0 
      };

      let idx = (data as string).indexOf("/")
      let idxFimQTD = (data as string).length-1;
      
      Carrinho.produto = Number((data as string).slice(1, idx))
      Carrinho.qtd = Number((data as string).slice(idx+1, idxFimQTD)) 

      CarrinhoCompleto.push(Carrinho)
    })

    return CarrinhoCompleto;
  }

  getCarrinhoCompletoQTD(){    
    let carrinho = this.localdb.getAll();
    let qtd = 0;

    carrinho?.forEach(data => {
      let idx = (data as string).indexOf("/")
      let idxFim = (data as string).length-1;

      qtd += Number((data as string).slice(idx+1, idxFim)) 
    })

    return qtd;
  }

  change(){
    this.qtd = this.getCarrinhoCompletoQTD();
    this.qtdChange.next(this.qtd);
  }
}