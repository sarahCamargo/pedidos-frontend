import { Component } from '@angular/core';
import { IProdutoServico } from '../../../interfaces/produto-servico';
import { ProdutoServicoService } from '../../../services/produto-servico.service';

@Component({
  selector: 'app-produto-servico',
  templateUrl: './produto-servico-list.component.html',
  styleUrl: './produto-servico-list.component.css'
})
export class ProdutoServicoListComponent {

  items: IProdutoServico[] = [];

  alertMessage: string = '';

  constructor(private produtoService: ProdutoServicoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.findAll().subscribe(retorno => {
      this.items = retorno;
    });
  }

  delete(id: string): void {
    this.produtoService.delete(id).subscribe({
      next: () => {
        this.carregarProdutos();
      },
      error: (error) => {
        this.alertMessage = error.error.mensagem;
      }
    });
  }

  ocultarAlerta(): void {
    this.alertMessage = '';
  }
}
