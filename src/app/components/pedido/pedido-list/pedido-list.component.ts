import { Component } from '@angular/core';
import { IPedido } from '../../../interfaces/pedido';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrl: './pedido-list.component.css'
})
export class PedidoListComponent {
  pedidos: IPedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.pedidoService.findAll().subscribe(retorno => {
      this.pedidos = retorno;
    });
  }

  delete(id: string): void {
    this.pedidoService.delete(id).subscribe(() => {
      this.carregarProdutos();
    });
  }
}
