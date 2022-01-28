import {
  Container,
  CartIcon,
  CartNumberContainer,
  CartQuantity
} from './styles'

interface CartButtonProps {
  quantity?: number;
  onClick: () => void;
}

export function CartButton({quantity = 0, ...rest }: CartButtonProps) {

  return (
    <Container {...rest}>
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