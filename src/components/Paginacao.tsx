import { Pagination } from "@mui/material";
import { useAppSelector } from "../config/hooks";
import { useDispatch } from "react-redux";
import { mudarPagina } from "../config/modules/paginacao.slice";

export const Paginacao = () => {
  const produtos = useAppSelector((state) => state.produtos);
  const paginacao = useAppSelector((state) => state.paginacao);
  const dispatch = useDispatch();
  const numPaginas = Math.ceil(produtos.length / paginacao.itensPorPagina);
  
  // troca o event por _ para o erro de event nunca ser declarado parar de aparecer
  const selecionarPagina = (event: any, value: number) => {
    dispatch(mudarPagina(value));
  };
  return (
    <Pagination
      onChange={selecionarPagina}
      count={numPaginas}
      page={paginacao.paginaAtual}
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        m: 2,
      }}
    />
  );
};
