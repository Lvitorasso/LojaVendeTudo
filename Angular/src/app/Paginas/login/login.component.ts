import { delay, map } from 'rxjs/operators';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: any; 
  user: any;
  retorn: any;
  teste: any;
  
  constructor( private ref: ChangeDetectorRef,
    private router: Router,     
    private route: ActivatedRoute,
    private authService: AuthService,
    fb: FormBuilder) { 
      fb.group({
        Login:['',Validators.required],
        Senha:['',Validators.required]
     })
   };

   ngOnInit(){

   }
  
  signIn(credenciais: any) {

    this.authService.logar(credenciais).subscribe(result => { 
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  {
          this.invalidLogin = true; 
        }
      });
  }

 logarGoogle(){   
     this.authService.logarGoogle().subscribe(result => { 
       console.log("RESULTTTTTTTTT" + result)
      if (result){
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      }
      else  {
        this.invalidLogin = true; 
      }
    });
  }

  deslogarGoogle(){
    this.authService.deslogarGoogle()
  }

}

