import { CategoriaService } from './../../services/categoria/categoria.service';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'filtro-produto',
  templateUrl: './filtro-produto.component.html',
  styleUrls: ['./filtro-produto.component.css']
})
export class FiltroProdutoComponent implements OnInit {

  @Input('categoria')categoria: string | null = "";
  categorias: any[] = [];

  constructor( private catService: CategoriaService) { 
    catService.getTodasCategorias().pipe(take(1)).subscribe(resultadoAPI =>{
      this.categorias = resultadoAPI;
    })
  }

  ngOnInit(): void {
  }

}
