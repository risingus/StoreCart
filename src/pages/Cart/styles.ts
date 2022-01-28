import styled from 'styled-components';

interface ButtonProps {
  cancel?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0 0 0;
`;

export const EmptyCartText = styled.span`
  font-family: ${({theme}) => theme.fonts.error};
  font-size: 2rem;
  color: ${({theme}) => theme.colors.title};
  text-align: center;
`;

export const EndCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 0 4rem 0;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const TotalTitle = styled.span`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
  font-size: 2rem;
`;

export const Total = styled.span`
   font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.success};
  font-size: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CartEndButton = styled.button<ButtonProps>`
  border: none;
  background: ${({theme, cancel}) => cancel ?  theme.colors.background_primary : (
    theme.colors.success
  )};
  color: ${({theme, cancel}) => cancel ? theme.colors.title : (
    theme.colors.main_light
  )};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 1rem;
  padding: 1rem;
  width: 10rem;
  transition: linear .2s;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

`;

