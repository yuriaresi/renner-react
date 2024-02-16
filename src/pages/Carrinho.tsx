import { Button, Card, Container, Divider } from "@mui/material";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { useAppSelector } from "../config/hooks";

export const CarrinhoPage = () => {
  const carrinho = useAppSelector((state) => state.carrinho);

  const subTotal = carrinho.reduce((inicial, item) => {
    return inicial + item.produto.valor * item.quantidade;
  }, 0);

  const frete = 0;

  const total = subTotal + frete

  return (
    <Container>
      <br />
      <h1>Meu carrinho</h1>
      <Card>
        {carrinho.map((item) => (
          <CarrinhoProduto item={item} key={item.produto.id} />
        ))}
      </Card>

      <Card sx={{ mt: 2, p: 2 }}>
        <p>Subtotal: R$ {subTotal.toFixed(2)}</p>
        <p>Frete: GRÁTIS</p>
        <Divider />
        <p>Total: R$ {total.toFixed(2)}</p>
        <p>12x de R$ {(total / 12).toFixed(2)}</p>
      </Card>
      <br />
      <div>
        <Button variant="contained" color="success" fullWidth>
          <ShoppingCartCheckoutOutlined sx={{ mr: 1 }} />
          <span>Finalizar compra</span>
        </Button>
      </div>
      <br />
    </Container>
  );
};
