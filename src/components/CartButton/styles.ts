import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';

interface CartQuantityProps {
  quantity?: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  transition: linear .2s;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const CartIcon = styled(RiShoppingCartLine)`
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.main_light};
`;

export const CartNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 1.8rem;
  height: 1.8rem;
  background: ${({theme}) => theme.colors.main_light};
  border-radius: 50%;
  border-color: ${({theme}) => theme.colors.main};
  border-style: solid;
  border-width: 3px;
  margin: -1rem 0 0 -.5rem;
`;

export const CartQuantity = styled.span<CartQuantityProps>`
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({quantity}) => quantity !== undefined && quantity > 99 ? '.65rem' : '.8rem'};
`;