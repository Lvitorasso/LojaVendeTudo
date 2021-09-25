
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: any; 
   url = 'https://localhost:44336';

  constructor(private router: Router, private authService: AuthService) { 
  }

  signIn(credenciais: any) {
    
    console.log(JSON.stringify(credenciais))

    this.authService.login(this.url, credenciais)
      .subscribe(result => { 

        console.log('teste');

        if (result){
          this.router.navigate(['/']);
          console.log('teste 2');
        }
        else  {
          this.invalidLogin = true; 
        }
      });
  }

}

