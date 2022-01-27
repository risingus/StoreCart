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
  border-color: transparent;
  border-width: 2px;
  border-radius: 50%;
  border-style: solid;
  height: 3rem;
  width: 3rem;
  
  :hover {
    border-color: white;
  }
  
`

export const SunIcon = styled(MdWbSunny)`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.main_light};
`;


export const MoonIcon = styled(BsFillMoonStarsFill)`
  font-size: 1.3rem;
  color: ${({theme}) => theme.colors.main_light};
`;