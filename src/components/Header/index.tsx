import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { CartButton } from "../CartButton";
import { HomeButton } from "../HomeButton";
import { ThemeButton } from "../ThemeButton";

import { ActionsContainer, BrandTitle, Container } from "./styles";
interface HeaderProps {
  changeTheme: () => void;
  isLightTheme: boolean;
}

export function Header({
  changeTheme,
  isLightTheme
}: HeaderProps) {
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
          <ThemeButton  
            theme={isLightTheme}
            changeTheme={changeTheme}
          />
        </ActionsContainer>
    </Container>
  )
}