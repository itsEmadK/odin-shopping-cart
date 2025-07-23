import styled from 'styled-components';
import Spinner from './Spinner';

const Price = styled.p`
  font-weight: 500;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  align-self: center;
`;
const Title = styled.h4`
  align-self: center;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid rgb(170, 170, 170);
  border-radius: 8px;
  justify-content: space-between;
  gap: 0.75rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function ProductCard({
  product,
  count,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <Container>
      <Image src={product.image} />
      <Title>{product.title}</Title>
      <FlexBox>
        <Spinner
          onDec={onRemoveFromCart}
          onInc={onAddToCart}
          value={count}
        />
        <Price>{product.price}$</Price>
      </FlexBox>
    </Container>
  );
}
