import { IPedido } from "./pedido";
import { IProdutoServico } from "./produto-servico";

export interface IItensPedido {
    id: string;
    produtoServico: IProdutoServico;
    pedido: IPedido;
    quantidade: number;
}
