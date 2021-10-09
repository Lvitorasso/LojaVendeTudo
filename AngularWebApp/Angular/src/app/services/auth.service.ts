import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { BadRequestError } from './../Compartilhado/Erros/bad-request-error';
import { AppError } from './../Compartilhado/Erros/app-error';
import { NotFoundError } from './../Compartilhado/Erros/not-found-error';
import { localStorageService } from './localStorageService';

@Injectable()
export class AuthService {

  private _url = 'https://localhost:44336';

  constructor(private http: HttpClient, private localdb: localStorageService) {
  }

  

  login(login: any) {     
   return this.http.post( this._url+'/api/authenticate/logar', JSON.stringify(login), httpOptions).pipe(map((response: any) => { 

        if(response.token)
        {
          let result = response.token;
          this.localdb.set('token', result);
          this.localdb.set('usuario', response.usuario);
          
          return true;
        }

        return false;
      }, catchError(this.handleError)));
  }

  logout() { 
    this.localdb.remove('token');
    this.localdb.remove('usuario');
  }

  estaLogado() {     
    let jwt = new JwtHelperService();
    let token = this.localdb.get('token');

     if(!token || token == undefined || token == null || JSON.stringify(token) == '{}'){  
      return false;    
    }
    
    let estaExpirado = jwt.isTokenExpired(token);

     return !estaExpirado;
  }

  
  cadastrar(pessoa: any) { 
    return this.http.post( this._url+'/api/authenticate/cadastrar', JSON.stringify(pessoa), httpOptions).pipe(map((response: any) => { 
        if(response.mensagemRetornoOK)
          return true;
        else
          return false;
       }));
   }

   get usuarioAtual(){     
    let token = this.localdb.get('token');

    if(!token || token == undefined || token == null || JSON.stringify(token) == '{}')
      return false;   

      return new JwtHelperService().decodeToken(token);
   }
   
   private handleError(error: Response){
    if(error.status == 404)
      return throwError(new NotFoundError(error.json)); 
    else if(error.status == 400)
      return throwError(new BadRequestError(error.json));
    else          
      return throwError(new AppError(error.json));
  }


}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


