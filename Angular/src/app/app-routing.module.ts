import { AdminPedidosComponent } from './Paginas/admin/admin-pedidos/admin-pedidos.component';
import { AdminProdutosComponent } from './Paginas/admin/admin-produtos/admin-produtos.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { LoginComponent } from './Paginas/login/login.component';
import { NoAccessComponent } from './Paginas/no-access/no-access.component';
import { NotFoundComponent } from './Paginas/not-found/not-found.component';
import { CadastroComponent } from './Paginas/cadastro/cadastro.component';
import { ProdutosComponent } from './Paginas/produtos/produtos.component';
import { CarrinhoComponent } from './Paginas/carrinho/carrinho.component';
import { CheckOutComponent } from './Paginas/check-out/check-out.component';
import { CompraFinalizadaComponent } from './Paginas/compra-finalizada/compra-finalizada.component';
import { MinhasComprasComponent } from './Paginas/minhas-compras/minhas-compras.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'carrinho', component: CarrinhoComponent },
      { path: 'checkOut', component: CheckOutComponent },
      { path: 'compraFinalizada', component: CompraFinalizadaComponent },
      { path: 'minhasCompras', component: MinhasComprasComponent },
      { path: 'admPedidos', component: AdminProdutosComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admProdutos', component: AdminPedidosComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'no-access', component: NoAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [HomeComponent,  LoginComponent, NoAccessComponent, NotFoundComponent, CadastroComponent, ProdutosComponent, CarrinhoComponent,
  CheckOutComponent, CompraFinalizadaComponent, MinhasComprasComponent, AdminProdutosComponent, AdminPedidosComponent]