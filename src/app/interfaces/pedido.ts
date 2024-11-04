import { IItensPedido } from "./itens-pedido";

export interface IPedido {
    id: string;
    valorTotal: number;
    situacao: string;
    percentualDesconto: number;
    itensPedido: IItensPedido[];
}
