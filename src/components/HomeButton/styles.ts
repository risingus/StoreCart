import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  transition: linear .2s;
  
  :hover {
    transform: scale(1.2);
  }
`

export const HomeIcon = styled(AiOutlineHome)`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.main_light};
`;