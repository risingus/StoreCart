import {useNavigate} from 'react-router-dom';
import { 
  Container,
  InfoContainer,
  ProductImg,
  ProductPrice,
  ProductTitle
} from './styles'
interface ProductCartProps {
  product: {
    image: string,
    title: string;
    price: number;
    id: number;
  }
}

export function ProductCard({product} : ProductCartProps) {
  const navigate = useNavigate();

  function goToProductDetails() {
    navigate(`details${product.id}`, {state: product});
  }

  return (
    <Container onClick={goToProductDetails}>
      <ProductImg src={product.image} />
      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price ? `R$ ${product.price}` : ''}</ProductPrice>
      </InfoContainer>

    </Container>
  )
}