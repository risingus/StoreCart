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

export const ProductImg = styled.img`
  width: 25%;
  object-fit: contain;

  @media (max-width: 840px) {
    width: 40%;
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

export const Title = styled.span`
  font-family: ${({theme}) => theme.fonts.mid};
  color: ${({theme}) => theme.colors.text};
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const Description = styled.span`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: 1rem;
  text-transform: capitalize;
`;

export const Price = styled.span`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 2rem;
  color: ${({theme}) => theme.colors.title};
  margin: 3rem 0 1rem 0;
`;

export const BuyButton = styled.button`
  background: ${({theme}) => theme.colors.success};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main_light};
  font-size: 1.4rem;
  border: none;
  padding: 2rem;
  
  cursor: pointer;
  transition: linear .2s;

  :hover {
    transform: scale(1.05);
  }
`;