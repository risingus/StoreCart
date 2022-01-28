import { Error } from '../../components/Error';
import { Container } from './styles';


export function NotFound() {

  return (
    <Container>
      <Error message='Sorry, page not found' />
    </Container>
  )
}