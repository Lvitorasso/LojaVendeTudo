import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'filtro-produto',
  templateUrl: './filtro-produto.component.html',
  styleUrls: ['./filtro-produto.component.css']
})
export class FiltroProdutoComponent implements OnInit {

  @Input('categoria')categoria: string | null = "";
  categorias: any[] = [];

  constructor( private prodService: ProdutoService) { 
    prodService.getTodasCategorias().pipe(take(1)).subscribe(resultadoAPI =>{
      this.categorias = resultadoAPI;
    })
  }

  ngOnInit(): void {
  }

}
