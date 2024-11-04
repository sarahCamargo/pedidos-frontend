import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoServicoListComponent } from './components/produto-servico/produto-servico-list/produto-servico-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoServicoFormComponent } from './components/produto-servico/produto-servico-form/produto-servico-form.component';
import { FormsModule } from '@angular/forms';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido/pedido-form/pedido-form.component';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoServicoListComponent,
    ProdutoServicoFormComponent,
    PedidoListComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbAlert
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
