import styled from 'styled-components';
import CartItem from './CartItem';
import theme from '../util/theme.json';

const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  min-width: 275px;
  /* border: 2px solid red; */
  color: black;
  background-color: ${theme.schemes.light.secondaryContainer};
  height: 400px;
  max-height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
  max-height: 88%;
  overflow: auto;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const TotalPrice = styled.p`
  font-weight: 500;
`;
const PurchaseButton = styled.button`
  padding: 8px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  background-color: ${theme.schemes.light.primary};
  color: ${theme.schemes.light.onPrimary};
  cursor: pointer;
`;

export default function CartContent({
  products,
  cart,
  onProductAddToCart,
  onProductRemoveFromCart,
  onPurchase,
}) {
  let totalCost = 0;
  for (const id in cart) {
    if (Object.prototype.hasOwnProperty.call(cart, id)) {
      totalCost += (cart[id] || 0) * products[id].price;
    }
  }
  return (
    <Wrapper>
      <Grid>
        {Object.keys(cart)
          .filter((id) => cart[id])
          .map((id) => {
            return (
              <CartItem
                key={id}
                count={cart[id]}
                product={products.find((p) => p.id == id)}
                onAddToCart={() => onProductAddToCart(id)}
                onRemoveFromCart={() => onProductRemoveFromCart(id)}
              />
            );
          })}
      </Grid>

      <FlexBox>
        <TotalPrice>Total: {totalCost.toFixed(2)}$</TotalPrice>
        <PurchaseButton onClick={onPurchase}>Purchase</PurchaseButton>
      </FlexBox>
    </Wrapper>
  );
}
