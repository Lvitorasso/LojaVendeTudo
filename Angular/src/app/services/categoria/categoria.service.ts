import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) {
  }

  url: string = "https://localhost:44336";

  getTodasCategorias(){
    return this.http.get(this.url+'/api/Produto/getTodasCategorias').pipe(map((resultado: any) => resultado));
  }

}


