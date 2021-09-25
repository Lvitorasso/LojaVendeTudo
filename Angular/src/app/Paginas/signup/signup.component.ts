import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  flagFornecedor: any = 0;
  flagCliente: any = 1;
  DtCriacao: any = Date.now;

  constructor() { }

  ngOnInit() {
  }

  signUp(form: any){
    console.log(form);
  }

}
