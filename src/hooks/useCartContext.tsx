import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactElement,
} from 'react'
import { api } from '../services/api';

interface ContextProps {
  cartProducts: any;
}

interface ContextContainerProps {
  children: ReactElement
}

const CartContext = createContext<ContextProps | null>(null);

export function CartContextProvider({children}: ContextContainerProps) {
  const [cartProducts, setCartProducts] = useState([])
 
  return (
    <CartContext.Provider
      value={{
        cartProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )

}

export function useCartContext() {
  const context = useContext(CartContext)
  return context;
}