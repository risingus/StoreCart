import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import { ProductDetailSkeleton } from '../../components/ProductDetailSkeleton';
import { ProductProps, useCartContext } from '../../hooks/useCartContext';
import { api } from '../../services/api';
import { BuyButton, Container, Description, InfoContainer, Price, ProductImg, Title } from './styles';


interface StateLocationProps {
  state: ProductProps
}

export function ProductDetails() {
  const location = useLocation();
  const state = location.state as StateLocationProps;
  const navigate = useNavigate();
  const {id}  = useParams();
  const {addOnCart} = useCartContext();
  const [product, setProduct] = useState<ProductProps | any>({} as ProductProps);
  const [isLoading, setIsLoading] = useState(false);

  function buyProduct() {
    addOnCart(product)
  }

  useEffect(() => {
    function getProduct() {
      if (state) {
        setProduct(state)
        return;
      }
      setIsLoading(true);
  
      api.get(`products/${id}`)
        .then((response) => {
          if (response.data === null) {
            navigate('*')
            return
          }
          setProduct(response.data)
          setIsLoading(false)
        })
        .catch((err) => navigate('*', ))
    }
    getProduct();
  }, [id, state, navigate])

  if (isLoading) {
    return (
      <ProductDetailSkeleton />
    )
  }

  return (
    <Container>
      <ProductImg src={product.image} alt={product.description}/>
      <InfoContainer>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price && `R$ ${product.price}`}</Price>
        <BuyButton 
          type='button'
          onClick={buyProduct}
        >
          Add to cart
        </BuyButton>
      </InfoContainer>
    </Container>
  )
}