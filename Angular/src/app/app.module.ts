import { CarrinhoService } from './services/carrinho/carrinho.service';
import { CategoriaService } from './services/categoria/categoria.service';
import { TiraVirgulaPipe } from './Compartilhado/Pipes/tiraVirgula.pipe';
import { ProdutoService } from './services/produto/produto.service';
import { PedidosService } from './services/pedido/pedido.service';
import { PessoaService } from './services/pessoa/pessoa.service';
import { NomeUsuarioPipe } from './Compartilhado/Pipes/nome-usuario.pipe';
import { AdminAuthGuard } from './services/auth/admin-auth-guard.service';
import { AuthGuard } from './services/auth/auth-guard.service';
import { localStorageService } from './services/localStorageService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './services/auth/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarLojaComponent } from './Compartilhado/navbar/navbar-loja.component';
import { PropagandaSlideComponent } from './Compartilhado/Propaganda/propaganda-slide.component';
import { FooterLojaComponent } from './Compartilhado/footer-loja/footer-loja.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoCardComponent } from './Compartilhado/produto-card/produto-card.component';
import { FiltroProdutoComponent } from './Compartilhado/filtro-produto/filtro-produto.component';
import { OrderCardComponent } from './Paginas/order-card/order-card.component';


@NgModule({
  declarations: [
    AppComponent,    
    routingComponents, 
    NavbarLojaComponent,
    NomeUsuarioPipe,
    PropagandaSlideComponent,
    FooterLojaComponent,
    ProdutoCardComponent,
    TiraVirgulaPipe,
    FiltroProdutoComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    PedidosService,
    localStorageService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    PessoaService,
    ProdutoService,
    CategoriaService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
