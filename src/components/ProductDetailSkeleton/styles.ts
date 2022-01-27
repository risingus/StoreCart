import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15rem;
  padding: 5rem 8rem;

  @media (max-width: 1000px) {
    gap: 10%;
    justify-content: center;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 3rem 3rem;
  }

`;

export const ProductImg = styled.div`
  width: 25%;
  height: 20rem;

  @media (max-width: 640px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;

  @media (max-width: 750px) {
    width: 80%;
  }
`;

export const Title = styled.div`
`;

export const Description = styled.span`
  height: 6rem;
`;

export const Price = styled.span`
  width: 6rem;
  height: 2.3rem;
  margin: 3rem 0 1rem 0;
`;

export const BuyButton = styled.div`
  height: 4rem;
  width: 100%;
`;