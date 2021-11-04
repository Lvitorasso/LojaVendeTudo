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
    
    return this.http.get(this.url+'/api/Pessoa/ObterPessoaPorID', {params: params}).pipe(map((response: any) => response));
  }

  getUsuarioPorName(nome: string){
    let params = new HttpParams();
    params = params.append('nome', nome);
    return this.http.get(this.url+'/api/Pessoa/ObterPessoaPorNome', {params: params}).pipe(map((response: any) => response));
  }

  getTodosUsuarios(){
    return this.http.get(this.url+'/api/Pessoa/getTodosUsuarios').pipe(map((response: any) => response));
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
