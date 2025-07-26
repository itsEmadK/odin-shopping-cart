import styled from 'styled-components';
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 250px;
`;
const Image = styled.img`
  width: 40px;
  max-height: 40px;
  object-fit: contain;
  align-self: center;
  bottom: 2px solid red;
`;
const Title = styled.h6`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.p`
  font-size: 0.75rem;
`;
const AllTextsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`;

export default function CartItem({
  product,
  count,
  onAddToCart,
  onRemoveFromCart,
}) {
  // console.log('===', product, count);

  return (
    <Container>
      <Image src={product.image} />
      <AllTextsContainer>
        <Title>{product.title}</Title>
        <FlexBox>
          <Price>${product.price}</Price>
          <Spinner
            onDec={onRemoveFromCart}
            onInc={onAddToCart}
            value={count}
          />
        </FlexBox>
      </AllTextsContainer>
    </Container>
  );
}
