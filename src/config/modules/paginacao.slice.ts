import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Paginacao } from "../../models/paginacao.models";

const initialState: Paginacao = {
    paginaAtual: 1,
    itensPorPagina: 5
}

const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState: initialState as Paginacao,
    reducers: {

        //payload => a pagina que eu quero ir
        mudarPagina: (state, action: PayloadAction<number>) => {
            return {
                paginaAtual: action.payload,
                itensPorPagina: state.itensPorPagina
            }
        }
    }
});

export default paginacaoSlice.reducer
export const { mudarPagina } = paginacaoSlice.actions


// total de paginas => tamanho da lista de produtos
//pagina atual
// itens por pagina 

