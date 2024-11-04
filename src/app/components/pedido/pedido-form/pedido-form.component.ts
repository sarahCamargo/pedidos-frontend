import { Component } from '@angular/core';
import { IPedido } from '../../../interfaces/pedido';
import { PedidoService } from '../../../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IItensPedido } from '../../../interfaces/itens-pedido';
import { IProdutoServico } from '../../../interfaces/produto-servico';
import { ProdutoServicoService } from '../../../services/produto-servico.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrl: './pedido-form.component.css'
})
export class PedidoFormComponent {

  pedido: IPedido = {
    id: '',
    valorTotal: 0,
    situacao: 'true',
    percentualDesconto: 0,
    itensPedido: []
  };

  itensPedido: IItensPedido[] = [];

  produtoServico: IProdutoServico[] = [];

  selectedProduto!: IProdutoServico;

  quantidadeItem: number = 0;

  isEdicao: boolean = false;

  alertMessage: string = '';

  constructor(
    private service: PedidoService,
    private serviceItem: ProdutoServicoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '';
    this.carregarProdutos();
    if (id) {
      this.isEdicao = true;

      this.service.findById(id).subscribe(retorno => {
        this.pedido = retorno;
        this.pedido.situacao = this.pedido.situacao == 'ABERTO' ? 'true' : '';
        this.itensPedido = this.pedido.itensPedido;
      });
    }
  }

  salvar(): void {
    this.pedido.situacao = this.pedido.situacao ? 'ABERTO' : 'FECHADO';
    this.pedido.itensPedido = this.itensPedido;
    if (this.isEdicao) {
      this.service.update(this.pedido).subscribe({
        next: () => {
          this.router.navigate(['/pedido']);
        },
        error: (error) => {
          this.alertMessage = error.error.mensagem;
        }
      });
    } else {
      this.service.add(this.pedido).subscribe({
        next: () => {
          this.router.navigate(['/pedido']);
        },
        error: (error) => {
          this.alertMessage = error.error.mensagem;
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/pedido']);
  }

  excluirItem(index: number): void {
    this.itensPedido.splice(index, 1)
    this.calculaTotal();
  }


  carregarProdutos(): void {
    this.serviceItem.findAll().subscribe(retorno => {
      this.produtoServico = retorno;
    });
  }

  adicionarItem(): void {
    const item: IItensPedido = {
      id: '',
      produtoServico: this.selectedProduto,
      pedido: {
        id: '',
        valorTotal: 0,
        situacao: '',
        percentualDesconto: 0,
        itensPedido: []
      },
      quantidade: this.quantidadeItem
    };

    this.itensPedido.push(item);
    this.calculaTotal();
  }

  calculaTotal(): void {
    this.pedido.valorTotal = 0;
    this.itensPedido.forEach(item => {
      this.pedido.valorTotal += item.produtoServico.preco * item.quantidade;
    })
  }

  ocultarAlerta(): void {
    this.alertMessage = '';
  }
}
