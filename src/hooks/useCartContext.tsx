import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactElement,
} from 'react'
import { api } from '../services/api';

interface ProductProps {
  category: string,
  description: string,
  id: number,
  image: string,
  title: string,
  price: number,
  quantity?: number,
  rating: {
    rate: number,
    count: number
  }
}
interface ContextProps {
  cart: Array<ProductProps>;
  addOnCart: (arg: ProductProps) => void;
  removeOfCart: (arg: ProductProps) => void;
}
interface ContextContainerProps {
  children: ReactElement;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

export function CartContextProvider({children}: ContextContainerProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addOnCart(product: ProductProps) {
    console.log(product)
  }

  function removeOfCart(product: ProductProps) {

  }
 
  return (
    <CartContext.Provider
      value={{
        cart,
        addOnCart,
        removeOfCart
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