import { useEffect, useState } from 'react';
import { Error } from '../../components/Error';
import { ProductCard } from '../../components/ProductCard';
import { StoreCartSkeleton } from '../../components/StoreCardSkeleton';
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

// created this const to render the skeleton multiple times
const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

export function Store() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
  
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container>
      {
        isLoading ? skeletonArray.map((_, index) => <StoreCartSkeleton key={index} />) : !isError ? (
          products.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <Error />
        )
      }
    </Container>
  )
}