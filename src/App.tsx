import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/globalTheme';
import { light } from './styles/theme';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Store } from './pages/Store';
import { CartContextProvider } from './hooks/useCartContext';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <CartContextProvider>
          <>
            <Header/>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details:id" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
