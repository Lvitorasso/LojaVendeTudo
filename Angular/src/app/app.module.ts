import { localStorageService } from './services/localStorageService';
import { MockBackend } from '@angular/http/testing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './Paginas/admin/admin.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Paginas/home/home.component';
import { LoginComponent } from './Paginas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoAccessComponent } from './Paginas/no-access/no-access.component';
import { NotFoundComponent } from './Paginas/not-found/not-found.component';
import { SignupComponent } from './Paginas/signup/signup.component';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,    
    routingComponents, 
    SignupComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
