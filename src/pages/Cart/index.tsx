import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../components/CartItem';
import { useCartContext } from '../../hooks/useCartContext';
import { 
  ButtonsContainer,
  CartEndButton,
  Container,
  EmptyCartText,
  EndCart,
  TextContainer,
  Total,
  TotalContainer,
  TotalTitle
} from './styles';

export function Cart() {
  const { cart, total, buy } = useCartContext();
  const navigate = useNavigate();

  function endPurchase() {
    buy();
  }

  function backToStore() {
    navigate('/')
  }

  if (!cart || cart.length === 0) {
    return (
      <TextContainer>
        <EmptyCartText>
          Your 🛒 is empty
        </EmptyCartText>
      </TextContainer>
    )
  }

  return (
    <Container>
        {
          cart.map((product) => (
            <CartItem
              product={product}
              key={product.id} />
          ))
        }
      <EndCart>
        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <Total>{total !== 0 && total && `R$ ${total}`}</Total>
        </TotalContainer>

        <ButtonsContainer>
          <CartEndButton cancel={true} onClick={backToStore}>Return to store</CartEndButton>
          <CartEndButton onClick={endPurchase}>Buy</CartEndButton>
        </ButtonsContainer>
      </EndCart>

      </Container>
  )
}