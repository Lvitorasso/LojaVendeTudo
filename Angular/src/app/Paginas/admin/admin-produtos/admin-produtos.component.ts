import { ProdutoService } from './../../../services/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../../Modelos/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css']
})
export class AdminProdutosComponent implements OnInit {
produtos: Produto[];

  constructor(private route: Router,  private activatedRoute: ActivatedRoute, 
    private produtoService: ProdutoService) { 
    produtoService.getTodosProdutos().subscribe( resultadoAPI => {
      this.produtos = resultadoAPI;
    });
  }
  // constructor(private pessService: PessoaService,
  //   private activatedRoute: ActivatedRoute) { 
  //   pessService.getTodosUsuarios().subscribe(resultadoAPI => {
  //     this.pessoas = resultadoAPI 
  //   });
  // }
  ngOnInit(): void {
  }

}
