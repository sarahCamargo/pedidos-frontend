import { Component } from '@angular/core';
import { IProdutoServico } from '../../../interfaces/produto-servico';
import { ProdutoServicoService } from '../../../services/produto-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-servico-form',
  templateUrl: './produto-servico-form.component.html',
  styleUrl: './produto-servico-form.component.css'
})
export class ProdutoServicoFormComponent {

  item: IProdutoServico = {
    id: '',
    nome: '',
    descricao: '',
    preco: 0,
    tipo: 'PRODUTO',
    situacao: 'true'
  };

  isEdicao: boolean = false;

  constructor(
    private service: ProdutoServicoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '';
    if (id) {
      this.isEdicao = true;

      this.service.findById(id).subscribe(retorno => {
        this.item = retorno;
        this.item.situacao = this.item.situacao == 'ATIVO' ? 'true' : '';
      });
    }
  }

  salvar(): void {
    this.item.situacao = this.item.situacao ? 'ATIVO' : 'DESATIVADO';
    if (this.isEdicao) {
      this.service.update(this.item).subscribe(() => {
        this.router.navigate(['/produto-servico']);
      });
    } else {
      this.service.add(this.item).subscribe(() => {
        this.router.navigate(['/produto-servico']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/produto-servico']);
  }
}
