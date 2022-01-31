import { 
  Container,
  CustomImg,
  TitleError
} from "./styles";
import errorImage from '../../assets/img/error.svg';

interface ErrorProps {
  message?: string;
}

export function Error({message = 'Sorry, something went wrong'}: ErrorProps) {

  return (
    <Container>
      <TitleError>
        {message}
      </TitleError>
      <CustomImg src={errorImage} alt="Something went wrong"/>
    </Container>
  )
}