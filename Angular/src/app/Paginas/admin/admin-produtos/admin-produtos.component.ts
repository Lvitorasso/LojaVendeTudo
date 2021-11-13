import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../../Modelos/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css']
})
export class AdminProdutosComponent implements OnInit {
produtos: Produto[] | undefined;

  constructor(private route: Router,  private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

}
