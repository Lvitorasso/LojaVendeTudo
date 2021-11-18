import { PessoaService } from './../pessoa/pessoa.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, ReplaySubject, throwError  } from 'rxjs';
import { BadRequestError } from './../../Compartilhado/Erros/bad-request-error';
import { AppError } from './../../Compartilhado/Erros/app-error';
import { NotFoundError } from './../../Compartilhado/Erros/not-found-error';
import { localStorageService } from './../localStorageService';

@Injectable()
export class AuthService {

  private _url = 'https://localhost:44336';  
  auth2: any;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  
  private name: string = "";
  private role: string = "";

  constructor(private http: HttpClient, 
    private localdb: localStorageService,
    private userService: PessoaService) 
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
  
   async logarGoogle(){ 
      let promise = await this.auth2.signIn({ 
         scope: 'https://www.googleapis.com/auth/gmail.readonly'
       }).then( (user:any) => {
         this.subject.next(user);

         return user;
       }
    )  

    if(!promise) 
       return false;

       this.localdb.set('role', 'user');
       this.localdb.set('usuario', promise.getBasicProfile().getName());                   
       this.localdb.set('token', promise.getAuthResponse(true).id_token);

     return true;
  }

  deslogar() { 
    this.localdb.remove('token');
    this.localdb.remove('usuario');
    this.localdb.remove('role');
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


  usuarioAtual(){     
    let token = this.localdb.get('token');

     if(!token || token == undefined || token == null || JSON.stringify(token) == '{}')
       return false;   

      return new JwtHelperService().decodeToken(token);
   }
   
  getName(){
    this.name = this.usuarioAtual().unique_name;

    if(!this.name)
       this.name = this.usuarioAtual().name;

       return this.name;
  }

  getRole(){
    this.role = this.usuarioAtual().role;

    if(!this.role)
       this.role = "user";

       return this.role;
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


