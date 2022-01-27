import { Container, CustomImg, TitleError } from "./styles";

interface ErrorProps {
  message?: string;
}


export function Error({message = 'Sorry, something went wrong'}: ErrorProps) {

  return (
    <Container>
      <TitleError>
        {message}
      </TitleError>
      <CustomImg src="assets/img/error.svg"  alt="Something went wrong"/>
    </Container>
  )
}