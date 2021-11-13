import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  flagFornecedor: any = 0;
  flagCliente: any = 1;
  FlagBloqueio: any = 0;
  currentDate = new Date();
  DtCriacao = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  DtUltimoLogin = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  invalid: any; 

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  Cadastrar(form: any){
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

