import styled from 'styled-components';
import CartItem from './CartItem';
import theme from '../util/theme.json';
import { useCartApi, useCartData } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductsContext';

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
  &:disabled {
    background-color: rgb(159, 164, 172);
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function CartContent() {
  const cart = useCartData();
  const cartApi = useCartApi();
  const { products } = useProducts();
  let totalCost = 0;

  Object.keys(cart).forEach((id) => {
    totalCost += (cart[id] || 0) * products.find((p) => p.id == id).price;
  });

  const handleAddProduct = (id) => {
    cartApi.addToCart(id);
  };
  const handleRemoveProduct = (id) => {
    cartApi.removeFromCart(id);
  };
  const handlePurchase = () => {
    cartApi.purchase();
  };
  return (
    <Wrapper>
      <Grid>
        {products &&
          Object.keys(cart)
            .filter((id) => cart[id])
            .map((id) => {
              return (
                <CartItem
                  key={id}
                  count={cart[id]}
                  product={products.find((p) => p.id == id)}
                  onAddToCart={() => handleAddProduct(id)}
                  onRemoveFromCart={() => handleRemoveProduct(id)}
                />
              );
            })}
      </Grid>

      <FlexBox>
        <TotalPrice>Total: {totalCost.toFixed(2)}$</TotalPrice>
        <PurchaseButton
          onClick={handlePurchase}
          disabled={totalCost === 0}
        >
          Purchase
        </PurchaseButton>
      </FlexBox>
    </Wrapper>
  );
}
