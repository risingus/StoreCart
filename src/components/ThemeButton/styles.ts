import styled from 'styled-components';
import { MdWbSunny } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  cursor: pointer;
  background: transparent;
  transition: linear .2s;
  border: none;
  
  :hover {
    transform: scale(1.2);
  }
`

export const SunIcon = styled(MdWbSunny)`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.main_light};
`;


export const MoonIcon = styled(BsFillMoonStarsFill)`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.main_light};
`;