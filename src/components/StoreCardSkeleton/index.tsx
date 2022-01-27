import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { lighten } from "polished";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, InfoContainer, ProductImg, ProductPrice, ProductTitle } from "./styles";


export function StoreCartSkeleton() {
  return (

    <SkeletonTheme
      baseColor="#aeaeae"
      highlightColor={`${lighten(0.1, '#aeaeae')}`}
    >

      <Container>
        <ProductImg>
          <Skeleton height="100%" width="100%" />
        </ProductImg>

      <InfoContainer>
        <ProductTitle>
          <Skeleton height="100%" width="100%" />
        </ProductTitle>
        <ProductPrice>
          <Skeleton height="100%" width="100%" />
        </ProductPrice>
      </InfoContainer>
      </Container>


    </SkeletonTheme>
   
  )
}