import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { localStorageService } from '../localStorageService';

@Injectable()
export class PessoaService {

  constructor(private http: HttpClient, private localdb: localStorageService) {
  }

  url: string = "https://localhost:44336";


  getUsuarioPorID(id: number){    
    let params = new HttpParams();
    params = params.append('id', id);
    
    return this.http.get(this.url+'/api/pessoas/ObterPessoaPorID', {params: params}).pipe(map((r: any)  => r));
  }

  getUsuarioPorName(nome: string){
    let params = new HttpParams();
    params = params.append('nome', nome);
    return this.http.get(this.url+'/api/pessoas/ObterPessoaPorNome', {params: params}).pipe(map((r: any)  => r));
  }

  getTodosUsuarios(){
    return this.http.get(this.url+'/api/pessoas/GetTodosUsuarios').pipe(map((r: any)  => r));
  }

  salvarPessoaPorID(pessoa: any){
    return this.http.post(this.url+'/api/pessoas/salvarPessoaPorID/pessoa', pessoa, { observe: 'response' });
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
