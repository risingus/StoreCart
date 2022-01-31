import { useNavigate } from "react-router-dom";
import { ProductProps, useCartContext } from "../../hooks/useCartContext";
import { ChangeQuantity } from "../ChangeQuantity";
import {
  CodText,
  Container,
  InStockText,
  PriceContainer,
  PriceText,
  ProdContainer,
  ProdDetailContainer,
  ProdImg,
  ProdInfoContainer,
  ProdTitle,
  QuantityContainer,
  Title,
  TitleContainer,
} from "./styles";

interface CartItemProps {
  product: ProductProps;
}

export function CartItem({ product }: CartItemProps) {
  const { handleCart } = useCartContext();
  const navigate = useNavigate();

  function changeQuantity(type: string) {
    handleCart(product, type);
  }

  return (
    <Container>
      <ProdContainer>
        <TitleContainer>
          <Title>Product</Title>
        </TitleContainer>

        <ProdDetailContainer>
          <ProdImg src={product.image} alt={product.title} />

          <ProdInfoContainer>
            <ProdTitle onClick={() => navigate(`/details${product.id}`, { state: product })}>{product.title}</ProdTitle>
            <InStockText>In stock</InStockText>
            <CodText>{product.id && `Code: ${product.id}`}</CodText>
          </ProdInfoContainer>
        </ProdDetailContainer>
      </ProdContainer>

      <QuantityContainer>
        <TitleContainer>
          <Title>Quantity</Title>
        </TitleContainer>

        <ChangeQuantity quantity={product.quantity} handleQuantity={changeQuantity} />
      </QuantityContainer>

      <PriceContainer>
        <TitleContainer>
          <Title>Price</Title>
        </TitleContainer>
        <PriceText>{product.total && `R$ ${product.total}`}</PriceText>
      </PriceContainer>
    </Container>
  );
}
