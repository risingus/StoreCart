import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;

export const TitleError = styled.span`
  font-family: ${({theme}) => theme.fonts.error};
  font-size: 2.5vw;
  text-align: center;

  @media (max-width: 770px) {
    font-size: 4vw;
  }

  @media (max-width: 620px) {
    font-size: 5vw;
  }
`;

export const CustomImg = styled.img`
  width: 45%;

  @media (max-width: 850px) {
    width: 80%;
  }


  @media (max-width: 620px) {
    width: 100%;
  }

`;