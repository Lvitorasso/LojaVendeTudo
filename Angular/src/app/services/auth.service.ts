import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable  } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(map((response: any) =>{ 

        let result = response.json;

        if(result && result.token)
        {
          localStorage.setItem('token', result.token);
          return true;
        }

        return false;
      }
      ));
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

