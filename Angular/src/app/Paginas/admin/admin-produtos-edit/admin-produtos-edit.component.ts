import { CategoriaService } from './../../../services/categoria/categoria.service';
import { PessoaService } from './../../../services/pessoa/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../../services/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Modelos/produto';
import { first, take } from 'rxjs/operators';
import { TiraVirgulaPipe } from 'src/app/Compartilhado/Pipes/tiraVirgula.pipe';

@Component({
  selector: 'app-admin-produtos-edit',
  templateUrl: './admin-produtos-edit.component.html',
  styleUrls: ['./admin-produtos-edit.component.css']
})
export class AdminProdutosEditComponent implements OnInit {
  produto: Produto = new Produto();
  id: any;
  fornecedores: any;
  categorias: any;

  constructor(private prodService: ProdutoService, private route: ActivatedRoute,
   private router: Router, private pesService: PessoaService, private catService: CategoriaService) { 
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      prodService.getProdutoPorID(this.id).pipe(take(1)).subscribe( resultadoAPI => {
        this.produto = resultadoAPI;
        console.log(this.produto)
      });
    }

    pesService.getTodosFornecedores().pipe(take(1)).subscribe(resultado => {
      this.fornecedores = resultado;
    
    })

    catService.getTodasCategorias().pipe(take(1)).subscribe(resultado => {
      this.categorias = resultado;
    })

  }

  ngOnInit(): void {
  }

  salvar(f: any){
    this.prodService.salvarProdutoPorID(this.produto).subscribe( data => {
      if(data.status == 200){
        this.router.navigate(['/adm/Produtos']);
      }
      else
      {
        console.log("ERRO")
      }
    });
  }

}
