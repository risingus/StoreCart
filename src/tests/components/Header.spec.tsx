import {render, screen} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../../components/Header';
import { CartContextProvider } from '../../hooks/useCartContext';
import {light} from '../../styles/theme';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <CartContextProvider>
            <Header />
          </CartContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    )
  
    screen.getByText('GG Store')
  })

})

