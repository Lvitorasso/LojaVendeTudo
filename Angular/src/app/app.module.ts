import { NomeUsuarioPipe } from './Compartilhado/Pipes/nome-usuario.pipe';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { localStorageService } from './services/localStorageService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarLojaComponent } from './Compartilhado/navbar/navbar-loja.component';
import { PropagandaSlideComponent } from './Compartilhado/Propaganda/propaganda-slide.component';
import { AdminProdutosComponent } from './Paginas/admin/admin-produtos/admin-produtos.component';
import { AdminPedidosComponent } from './Paginas/admin/admin-pedidos/admin-pedidos.component';
import { FooterLojaComponent } from './Compartilhado/footer-loja/footer-loja.component';


@NgModule({
  declarations: [
    AppComponent,    
    routingComponents, 
    NavbarLojaComponent,
    NomeUsuarioPipe,
    PropagandaSlideComponent,
    AdminProdutosComponent,
    AdminPedidosComponent,
    FooterLojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    OrderService,
    localStorageService,
    AuthService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
