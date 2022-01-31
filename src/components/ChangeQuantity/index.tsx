import { 
  Container,
  MinusIcon,
  PlusIcon,
  QuantityButton,
  Value
} from "./styles";

interface ChangeQuantityProps {
  quantity: number | undefined;
  handleQuantity: (arg: string) => void;
}

export function ChangeQuantity({quantity, handleQuantity}: ChangeQuantityProps) {

  return (
    <Container>
      <QuantityButton type="button" onClick={() => handleQuantity('minus')}>
        <MinusIcon />
      </QuantityButton>

      <Value value={quantity} readOnly />

      <QuantityButton type="button" onClick={() => handleQuantity('plus')}>
        <PlusIcon />
      </QuantityButton>
    </Container>
  )
}