import styled from 'styled-components';
import { FiMinusSquare } from 'react-icons/fi';
import { FiPlusSquare } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
  gap: .2rem;
  flex-wrap: nowrap;
`;

export const QuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;

  :hover {
    transform: scale(1.1);
  }
`;

export const Value = styled.input`
  width: 3rem;
  height: 1.5rem;
`;

export const MinusIcon = styled(FiMinusSquare)`
  font-size: 1.4rem;

  :hover {
    color: ${({theme}) => theme.colors.main};
  }
`;

export const PlusIcon = styled(FiPlusSquare)`
  font-size: 1.4rem;

  :hover {
    color: ${({theme}) => theme.colors.success};
  }
`;