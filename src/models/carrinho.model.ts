import { Produto } from "./produtos.model";

export interface CarrinhoItem {
    produto: Produto,
    quantidade: number,
}

export type Carrinho = CarrinhoItem[];