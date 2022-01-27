import { useCartContext } from "../../hooks/useCartContext";
import { CartButton } from "../CartButton";
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

  return (
    <Container>
        <BrandTitle>
          GG Store
        </BrandTitle>

        <ActionsContainer>
          <CartButton quantity={cart.length} />
          <ThemeButton  
            theme={isLightTheme}
            changeTheme={changeTheme}
          />
        </ActionsContainer>
    </Container>
  )
}