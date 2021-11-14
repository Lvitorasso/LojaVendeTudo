import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Produto } from 'src/app/Modelos/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
todosProdutos: Produto[] = [];
produtos: Produto[] = [];
categoria: string | null = "";

  constructor( private prodService: ProdutoService, private route:ActivatedRoute) { 
      prodService.getTodosProdutos().pipe(take(1)).subscribe(resultadoAPI => {
        this.produtos = resultadoAPI;
        this.todosProdutos = resultadoAPI;
      })

      route.queryParamMap.subscribe(param => {
        this.categoria = param.get('categoria');

        if(this.categoria){
            this.produtos = this.todosProdutos.filter((x: any) => x.fk_Categoria == this.categoria)
          }
        else
          this.produtos = this.todosProdutos
      })
  }

  exibirTodos(){
    this.produtos = this.todosProdutos
  }

  ngOnInit(): void {
  }

}
