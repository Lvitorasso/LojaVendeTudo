import { UsuarioService } from './usuario.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, ReplaySubject, throwError  } from 'rxjs';
import { BadRequestError } from './../Compartilhado/Erros/bad-request-error';
import { AppError } from './../Compartilhado/Erros/app-error';
import { NotFoundError } from './../Compartilhado/Erros/not-found-error';
import { localStorageService } from './localStorageService';

@Injectable()
export class AuthService {

  private _url = 'https://localhost:44336';  
  auth2: any;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor(private http: HttpClient, 
    private localdb: localStorageService,
    private userService: UsuarioService) 
    {
      //carregando a biblioteca de autenticação do google
        gapi.load('auth2', () => {
          (this.auth2 as gapi.auth2.GoogleAuth) = gapi.auth2.init({
            client_id: '116488255077-0nhv6254f6pim4c088tr2glgko9m7p77.apps.googleusercontent.com'
          });
        });
    }

  public deslogarGoogle(){
     this.auth2.signOut().then( () => {
       this.subject.next();     
     }).catch(() => {
       this.subject.next();           
     })
  }

  public observable() : Observable<gapi.auth2.GoogleUser>{
     return this.subject.asObservable()
  }

  logar(login: any) {     
   return this.http.post( this._url+'/api/authenticate/logar', JSON.stringify(login), httpOptions).pipe(map((response: any) => { 

        if(response.token)
        {
          let result = response.token;
          this.localdb.set('token', result);
          this.localdb.set('usuario', response.usuario);
          this.localdb.set('role', 'admin');
          
          return true;
        }

        return false;
      }, catchError(this.handleError)));
  }
  
  logarGoogle(){ 
    let promise =  new Promise<boolean>((resolve, reject) => {
       this.auth2.signIn({ 
        scope: 'https://www.googleapis.com/auth/gmail.readonly'
      }).then( (user:any) => {
        this.subject.next(user);
  
        this.localdb.set('token', user.getAuthResponse().access_token);
        this.localdb.set('usuario', user.getBasicProfile().getName());     
    
        console.log("loguei ok")
        
        return true;     
      })

      console.log("não loguei ok")
      return false; 
    })
    
    return promise;
 }

  deslogar() { 
    this.localdb.remove('token');
    this.localdb.remove('usuario');
  }

  estaLogado() {     
    let jwt = new JwtHelperService();
    let token = this.localdb.get('token');

     if(!token || token === undefined || token === null || JSON.stringify(token) === '{}'){  
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


