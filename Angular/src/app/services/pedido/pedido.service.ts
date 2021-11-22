import { Produto } from 'src/app/Modelos/produto';
import { Pedido } from 'src/app/Modelos/pedido';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { localStorageService } from '../localStorageService';

@Injectable()
export class PedidosService {

  constructor(private http: HttpClient, private localdb: localStorageService) {
  }
  
  url: string = "https://localhost:44336";

  getOrders() { 
    let token = this.localdb.get('token');
    httpOptions.headers.append('Authorization', 'Bearer '+ token);
    
    return this.http.get('/api/orders').pipe(map((response: any) => response));
  }

  realizarPedido(pedido: any)
  {
    //https://localhost:44336/api/RealizarPedido/Pedido 
    console.log(this.url+'/api/RealizarPedido/Pedido')
    

    return this.http.post(this.url+'/api/RealizarPedido/Pedido', pedido, { observe: 'response' });
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
