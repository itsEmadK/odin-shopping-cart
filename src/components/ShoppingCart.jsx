import { ShoppingBasketIcon } from 'lucide-react';
import styled from 'styled-components';
import theme from '../util/theme.json';

const CartIcon = styled(ShoppingBasketIcon)`
  display: block;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.075);
  }
`;

const CartWrapper = styled.div`
  position: relative;
`;

const ItemCount = styled.span`
  position: absolute;
  right: -3px;
  bottom: -7px;
  font-size: 0.75rem;
  background-color: ${theme.schemes.light.onPrimaryContainer};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: default;
`;

export default function ShoppingCart({ cart }) {
  return (
    <CartWrapper>
      <CartIcon />
      <ItemCount>{cart.length}</ItemCount>
    </CartWrapper>
  );
}
