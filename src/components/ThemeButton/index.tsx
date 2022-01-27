import { Container, MoonIcon, SunIcon } from "./styles";
interface ThemeButtonProps {
  theme: boolean;
  changeTheme: () => void;
}

export function ThemeButton({
  theme,
  changeTheme
}: ThemeButtonProps) {

  return (
    <Container 
      type="button" 
      onClick={changeTheme}
    >
      {
        theme ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      }
    </Container>
  )
}