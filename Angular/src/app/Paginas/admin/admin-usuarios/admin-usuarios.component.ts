import { PessoaService } from './../../../services/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/Modelos/Pessoa';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  pessoas: Pessoa[];

  constructor(private pessService: PessoaService,
    private activatedRoute: ActivatedRoute) { 
    pessService.getTodosUsuarios().subscribe(resultadoAPI => {
      this.pessoas = resultadoAPI 
    });
  }

  ngOnInit(): void {
  }

}
