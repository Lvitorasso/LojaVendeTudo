import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable  } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class AuthService {

  constructor( private http: HttpClient) {
  }


  login(url: any, login: any) { 
   return this.http.post( url+'/api/authenticate/login', JSON.stringify(login), httpOptions).pipe(map((response: any) => { 

        let result = response.token;

         if(result && result.token)
         {
        //   //localStorage.setItem('token', result.token);

           return true;
         }

        return false;
      }));
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }

  
  signUp(url: any, login: any) { 
    return this.http.post( url+'/api/authenticate/signUp', JSON.stringify(login), httpOptions).pipe(map((response: any) => { 
        return true;
       }));
   }
 

}


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}