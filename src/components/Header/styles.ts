import styled from 'styled-components';


export const Container = styled.div`
  background: ${({theme}) => theme.colors.main};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.brand};
  color: ${({theme}) => theme.colors.main_light};
  font-size: 2rem;
  padding: 0 1rem;
`;

export const ActionsContainer = styled.div`

`;