
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: any; 

  constructor(
    private router: Router,     
    private route: ActivatedRoute,
    private authService: AuthService,
    fb: FormBuilder) { 
      fb.group({
        Login:['',Validators.required],
        Senha:['',Validators.required]
     })
   };
  



  signIn(credenciais: any) {
    this.authService.login(credenciais).subscribe(result => { 
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  {
          this.invalidLogin = true; 
        }
      });
  }

}

