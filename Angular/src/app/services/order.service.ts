
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { localStorageService } from './localStorageService';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient, private localdb: localStorageService) {
  }

  getOrders() { 
    let token = this.localdb.get('token');
    httpOptions.headers.append('Authorization', 'Bearer '+ token);
    
    return this.http.get('/api/orders').pipe(map((response: any) => response));
  }
}



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
