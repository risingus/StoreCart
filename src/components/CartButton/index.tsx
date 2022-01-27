import { useNavigate } from 'react-router-dom'
import {
  Container,
  CartIcon,
  CartNumberContainer,
  CartQuantity
} from './styles'

interface CartButtonProps {
  quantity?: number;
}

export function CartButton({quantity = 1}: CartButtonProps) {
  const navigate = useNavigate();
  
  function goToCart() {
    navigate('/cart')
  }

  return (
    <Container onClick={goToCart}>
      <CartIcon />
      {
        quantity > 0 && (
          <CartNumberContainer>
            <CartQuantity quantity={quantity}>
              {quantity}
            </CartQuantity>
          </CartNumberContainer>
        )
      }
    </Container>
  )
}