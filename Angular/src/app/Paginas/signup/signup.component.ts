import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  flagFornecedor: any = 0;
  flagCliente: any = 1;
  currentDate = new Date();
  DtCriacao = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  invalid: any; 

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signUp(form: any){

    console.log(form);
     this.authService.cadastrar(form).subscribe(result => { 
       if (result){
         this.router.navigate(['/']);
       }
       else  {
         this.invalid = true; 
       }
    });
  }

}

