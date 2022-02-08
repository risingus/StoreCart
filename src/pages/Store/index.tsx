import { Error } from '../../components/Error';
import { ProductCard } from '../../components/ProductCard';
import { StoreCartSkeleton } from '../../components/StoreCardSkeleton';
import { useCartContext } from '../../hooks/useCartContext';
import { Container } from './styles';

// created this const to render the skeleton multiple times
const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

export function Store() {
  const {products, isLoading, isError} = useCartContext();

  return (
    <Container>
      {
        isLoading ? skeletonArray.map((_, index) => <StoreCartSkeleton key={index} />) : !isError ? (
          products && products.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <Error />
        )
      }
    </Container>
  )
}