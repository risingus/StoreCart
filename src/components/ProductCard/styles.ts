import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 2rem;
  border-style: solid;
  border-color: transparent;
  border-radius: .4rem;
  border-width: 1px;
  transition: linear .2s;

  :hover {
    border-color: ${({theme}) => theme.colors.main};
    transform: scale(1.03);
  } 
`;

export const ProductImg = styled.img`
  width: 40%;
  aspect-ratio: 1 / 1;

  @media (min-width: 672px) {
    width: 60%;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 1rem 0 0 0;
  gap: .5rem;
  width: 100%;
`;

export const ProductTitle = styled.span`
  font-family: ${({theme}) => theme.fonts.mid};
  color: ${({theme}) => theme.colors.text};
  font-size: 1.1rem;
  width: 100%;

  @media (min-width: 672px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProductPrice = styled.span`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.title};
`;