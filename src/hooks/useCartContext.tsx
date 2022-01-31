import React, {
  createContext,
  useState,
  useContext,
  ReactElement,
  useEffect,
} from 'react';
import { useTheme } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../services/api';

export interface ProductProps {
  category: string,
  description: string,
  id: number,
  image: string,
  title: string,
  price: number,
  quantity?: number,
  total?: number,
  rating: {
    rate: number,
    count: number
  }
}
interface ContextProps {
  cart: Array<ProductProps>;
  addOnCart: (arg: ProductProps) => void;
  handleCart: (arg: ProductProps, other: string) => void;
  total: number;
  buy: () => void;
  products: Array<ProductProps>;
  isLoading: boolean;
  isError: boolean;
}
interface ContextContainerProps {
  children: ReactElement;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

export function CartContextProvider({children}: ContextContainerProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const theme = useTheme()

  function getProducts() {
    setIsLoading(true);
    api.get('/products')
      .then((response) => {
        setProducts(response.data)
        setIsError(false);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }

  function sortCartList(a: ProductProps, b: ProductProps) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0
  }

  function addOnCart(product: ProductProps) {
    const isInList = cart.find((prod) => prod.id === product.id);

    if(isInList) {
      toast.info('Product alredy in cart', {
        position: toast.POSITION.TOP_CENTER,
        theme: theme.theme ===  'dark' ? 'dark' : 'light',
        autoClose: 2000
      })
     return
    }
    product.price = Number(product.price.toFixed(2))
    product.quantity = 1;
    product.total = Number(product.price.toFixed(2));
    const cartArray = [...cart, product];

    cartArray.sort(sortCartList);

    setCart(cartArray);
    toast.success('Product Added to your cart!', {
      position: toast.POSITION.TOP_CENTER,
      icon: '😄',
      theme: theme.theme ===  'dark' ? 'dark' : 'light',
      autoClose: 2000
    })
  }

  function handleCart(product: ProductProps, operation: string) {
    if (!product.quantity) return;
    if (!operation) return;

    const newProductList = cart.filter((prod) => prod.id !== product.id);

    if (operation === 'minus' && product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      product.quantity = newQuantity;
      product.total = Number((product.price * newQuantity).toFixed(2));

      const newCart = [...newProductList, product];
      newCart.sort(sortCartList);

      setCart(newCart);
      return
    }

    if (operation === 'minus' && product.quantity === 1) {
      setCart(newProductList);
      return;
    }

    const newQuantity = product.quantity + 1;
    product.quantity = newQuantity;
    product.total = Number((product.price * newQuantity).toFixed(2));
    const newCart = [...newProductList, product]

    newCart.sort(sortCartList);

    setCart(newCart);
  }

  function buy() {
    toast.success('Thanks for your acquisition!', {
      position: toast.POSITION.TOP_CENTER,
      icon: '🎉',
      theme: theme.theme ===  'dark' ? 'dark' : 'light',
      autoClose: 2000
    })

    setTimeout(() => {
      setCart([]);
    }, 1000);

  }

  useEffect(() => {
    function getCartTotal() {
      const {cartTotal} = cart.reduce((acc: any, accumulator) => {
        if (accumulator.total) {
          acc.cartTotal += accumulator.total
        }
        return acc;
      }, {cartTotal: 0})

      const total = cartTotal.toFixed(2)

      setTotal(Number(total));
    }

    getCartTotal();
  }, [cart])

  useEffect(() => {
    getProducts();
  }, [])
 
  return (
    <CartContext.Provider
      value={{
        cart,
        addOnCart,
        handleCart,
        total,
        buy,
        products,
        isLoading,
        isError
      }}
    >
      <ToastContainer />
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  return context;
}