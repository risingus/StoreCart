import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/globalTheme';
import { light, dark } from './styles/theme';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Store } from './pages/Store';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  function changeTheme() {
    localStorage.setItem('ggStore:theme', JSON.stringify({theme: !isLightTheme}))
    setIsLightTheme(!isLightTheme);
  }

  function getStoredTheme() {
    const storedTheme = localStorage.getItem('ggStore:theme');
    if (!storedTheme) return;
    const storedThemeValue = JSON.parse(storedTheme).theme;
    setIsLightTheme(storedThemeValue);
  }

  useEffect(() => {
    getStoredTheme()
  }, [])
  
  return (
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <Header changeTheme={changeTheme} isLightTheme={isLightTheme} />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
