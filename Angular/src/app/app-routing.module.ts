import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Paginas/admin/admin.component';
import { HomeComponent } from './Paginas/home/home.component';
import { LoginComponent } from './Paginas/login/login.component';
import { NoAccessComponent } from './Paginas/no-access/no-access.component';
import { NotFoundComponent } from './Paginas/not-found/not-found.component';
import { SignupComponent } from './Paginas/signup/signup.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [HomeComponent, AdminComponent, LoginComponent, NoAccessComponent, NotFoundComponent, SignupComponent]