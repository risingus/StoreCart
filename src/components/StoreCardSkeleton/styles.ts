import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 2rem;
  border-radius: .4rem;
`;

export const ProductImg = styled.div`
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

export const ProductTitle = styled.div`
  width: 100%;
`;

export const ProductPrice = styled.div`
  width: 40%;
`;