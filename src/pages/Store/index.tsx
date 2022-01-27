import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { api } from '../../services/api';
import { Container } from './styles';

interface ProductProps {
  category: string,
  description: string,
  id: number,
  image: string,
  title: string,
  price: number,
  rating: {
    rate: number,
    count: number
  }
}


export function Store() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function getProducts() {
    setIsLoading(true);
    api.get('/products')
      .then((response) => {
        setProducts(response.data) 
        console.log(response.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container>
      {
        products.map((product) => <ProductCard product={product} key={product.id} />)
      }
    </Container>
  )
}