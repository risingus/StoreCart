import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ProdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProdDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 0 0 0 1rem;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProdInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (max-width: 860px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ProdImg = styled.img`
  width: 5rem;

  @media (max-width: 860px) {
    width: 4rem;
  }
`;


export const ProdTitle = styled.span`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.mid};
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 860px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InStockText = styled.span`
  color: ${({theme}) => theme.colors.success};
  font-family: ${({theme}) => theme.fonts.mid};
  font-size: 1rem;
`;

export const CodText = styled.span`
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.mid};
  font-size: 1rem;
`;

export const QuantityContainer = styled.div`
`;

export const PriceContainer = styled.div`
`;

export const PriceText = styled.span`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 1.2rem;
  padding: 0 1rem 0 0;

  @media (max-width: 370px) {
    font-size: 1rem;
  }
  
`;

export const TitleContainer = styled.div`
  background: ${({theme}) => theme.colors.text_detail};
  padding: .5rem;
  margin: 0 0 2rem 0;
`;

export const Title = styled.span`
  color: ${({theme}) => theme.colors.main_light};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 1rem;
`;

