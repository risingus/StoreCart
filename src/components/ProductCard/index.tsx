import { Container, InfoContainer, ProductImg, ProductPrice, ProductTitle } from './styles'


interface ProductCartProps {
  product: {
    image: string,
    title: string;
    price: number;
  }
}

export function ProductCard({product} : ProductCartProps) {

  return (
    <Container onClick={() => console.log('aqui')}>
      <ProductImg src={product.image} />

      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price ? `R$ ${product.price}` : ''}</ProductPrice>
      </InfoContainer>

    </Container>
  )
}