import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { lighten } from "polished";
import "react-loading-skeleton/dist/skeleton.css";
import { 
  BuyButton,
  Container,
  Description,
  InfoContainer,
  Price,
  ProductImg,
  Title
} from "./styles";

export function ProductDetailSkeleton() {

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
          <Title>
            <Skeleton height="100%" width="100%" />
          </Title>
          <Description>
            <Skeleton height="100%" width="100%" />
          </Description>
          <Price>
            <Skeleton height="100%" width="100%" />
          </Price>
          <BuyButton>
            <Skeleton height="100%" width="100%" />
          </BuyButton>
        </InfoContainer>
      </Container>
    </SkeletonTheme>
  )
}