import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { localStorageService } from '../localStorageService';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient, private localdb: localStorageService) {
  }

  url: string = "https://localhost:44336";


  getProdutoPorID(id: number){    
    let params = new HttpParams();
    params = params.append('id', id);
    
    return this.http.get(this.url+'/api/Produto/ObterProdutoPorID/id', {params: params}).pipe(map((r: any)  => r));
  }

  getProdutoPorName(nome: string){
    let params = new HttpParams();
    params = params.append('nome', nome);
    return this.http.get(this.url+'/api/Produto/ObterProdutoPorNome', {params: params}).pipe(map((r: any)  => r));
  }

  getTodosProdutos(){
    return this.http.get(this.url+'/api/Produto/GetTodosProdutos').pipe(map((resultado: any) => resultado));
  }

  salvarProdutoPorID(Produto: any){
    return this.http.post(this.url+'/api/Produto/salvarProdutoPorID/Produto', Produto, { observe: 'response' });
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
