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

  return (
    <Container>
        <BrandTitle>
          GG Store
        </BrandTitle>

        <ActionsContainer>
          <ThemeButton  
            theme={isLightTheme}
            changeTheme={changeTheme}
          />
        </ActionsContainer>
    </Container>
  )
}