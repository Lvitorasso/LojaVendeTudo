import { PessoaService } from './../../../services/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-usuario-edit',
  templateUrl: './admin-usuario-edit.component.html',
  styleUrls: ['./admin-usuario-edit.component.css']
})
export class AdminUsuarioEditComponent implements OnInit {
  Pessoa: any
  id: any;
  invalid: any; 


  constructor(private pessService: PessoaService,
    private router: Router,
    private route: ActivatedRoute) {
     this.id = this.route.snapshot.paramMap.get('id')

    this.pessService.getUsuarioPorID(this.id).pipe(take(1)).subscribe( pessoaAPI => this.Pessoa = pessoaAPI);
  }

  ngOnInit(): void {
  }

  salvar(pessoa: any){
    this.pessService.salvarPessoaPorID(this.Pessoa).subscribe((data) => {
      if(data.status == 200){
        this.router.navigate(['/adm/Usuarios']);
      }
      else
      {
        console.log("ERRO")
      }
    });
  }

  bloqueioUsuario(){
    this.Pessoa.FlagBloqueio += (!this.Pessoa.FlagBloqueio) ? 1 : -1;
  }

  resetarSenha(){

  }
}
