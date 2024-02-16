import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { Produto } from "../models/produtos.model";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { adicionarProduto } from "../config/modules/carrinho.slice";

export const ProdutoStyled = styled(Card)`
  margin: 8px 4px;
`;

interface ProdutoProps {
  produto:Produto
}

export const CardProduto = (props:ProdutoProps) => {
const dispatch = useAppDispatch()
const carrinho = useAppSelector(state => state.carrinho)

  const addCarrinho = ()=>{
    if(carrinho.find(item => item.produto == props.produto)){
      alert(`Você ja adiciou esse produto ao carrinho.`)
      return;

    }

    dispatch(adicionarProduto(props.produto))
  }
  
  return (
    <ProdutoStyled>
      <CardMedia
        component="img"
        height="194"
        image={props.produto.imgUrl}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {props.produto.nome}
        </Typography>
        <Typography variant="body1">R$ {props.produto.valor.toFixed(2)}</Typography>
        <Typography variant="caption">3x R$ {(props.produto.valor / 3).toFixed(2)}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addCarrinho} variant="outlined">Adicionar ao carrinho</Button>
      </CardActions>
    </ProdutoStyled>
  );
};
