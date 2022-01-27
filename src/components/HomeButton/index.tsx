import { Container, HomeIcon } from "./styles";

export function HomeButton({...rest}) {

  return (
    <Container 
      {...rest}
      type="button" 
    >
      <HomeIcon />
    </Container>
  )
}