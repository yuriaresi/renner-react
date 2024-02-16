import { Grid } from "@mui/material";
import { CardProduto } from "./CardProduto";
import { useAppSelector } from "../config/hooks";

export const ProdutosList = () => {
  const produtos = useAppSelector((state) => state.produtos);
  const paginacao = useAppSelector((state)=> state.paginacao)
  
  const posicaoInicial = paginacao.itensPorPagina * (paginacao.paginaAtual -1)
  const posicaoFinal = posicaoInicial + paginacao.itensPorPagina
  
  return (
    <div>
      <Grid container>
        {produtos.slice(posicaoInicial, posicaoFinal).map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProduto key={item.id} produto={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
