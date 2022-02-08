import {render, screen} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {light} from '../../styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { CartButton } from '../../components/CartButton';

describe('Header Component', () => {

  it('should show quantity of itens in cart', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <CartButton 
             quantity={20}
             onClick={() => {}}
          />
        </ThemeProvider>
      </BrowserRouter>
    )
  
    screen.getByText('20')
  })
})

