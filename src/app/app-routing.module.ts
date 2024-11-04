import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoServicoFormComponent } from './components/produto-servico/produto-servico-form/produto-servico-form.component';
import { ProdutoServicoListComponent } from './components/produto-servico/produto-servico-list/produto-servico-list.component';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: "produto-servico/novo", component: ProdutoServicoFormComponent },
  { path: "produto-servico/editar/:id", component: ProdutoServicoFormComponent },
  { path: "produto-servico", component: ProdutoServicoListComponent },
  { path: "pedido", component: PedidoListComponent },
  { path: "pedido/novo", component: PedidoFormComponent },
  { path: "pedido/editar/:id", component: PedidoFormComponent },
  { path: "", component: ProdutoServicoListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
