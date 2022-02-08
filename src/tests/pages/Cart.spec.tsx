import {render, screen} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {light} from '../../styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from '../../pages/Cart';
import React from 'react';

const Context = React.createContext({})

describe('Cart Page', () => {

  it('show cart empty when there is no item in cart', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <Context.Provider value={{
            cart: []
          }}>
            <Cart />
          </Context.Provider>
          
        </ThemeProvider>
      </BrowserRouter>
    )
  
    screen.getAllByText('Your 🛒 is empty')
  })
})

