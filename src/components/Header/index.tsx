import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { CartButton } from "../CartButton";
import { HomeButton } from "../HomeButton";
import { ActionsContainer, BrandTitle, Container } from "./styles";

export function Header() {
  const {cart} = useCartContext();
  const navigate = useNavigate();

  return (
    <Container>
        <BrandTitle onClick={() => navigate('/')}>
          GG Store
        </BrandTitle>

        <ActionsContainer>
          <HomeButton onClick={() => navigate('/')} />
          <CartButton 
            quantity={cart.length}
            onClick={() => navigate('/cart')}
          />
        </ActionsContainer>
    </Container>
  )
}