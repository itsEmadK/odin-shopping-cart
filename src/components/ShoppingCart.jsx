import { ShoppingBasketIcon } from 'lucide-react';
import styled from 'styled-components';
import theme from '../util/theme.json';
import { useEffect, useState } from 'react';
import CartContent from './CartContent';

const CartIcon = styled(ShoppingBasketIcon)`
  display: block;
  transition: transform 0.2s ease;
  cursor: pointer;
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
`;

export default function ShoppingCart({
  products,
  cart,
  onProductAddToCart,
  onProductRemoveFromCart,
  onPurchase,
}) {
  const [showContent, setShowContent] = useState(false);
  const handleCartIconClick = () => setShowContent(!showContent);

  let itemCount = 0;
  for (const id in cart) {
    itemCount += cart[id] || 0;
  }

  const handleBodyClicks = () => {
    setShowContent(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClicks);

    return () =>
      document.body.removeEventListener('click', handleBodyClicks);
  }, []);

  return (
    <CartWrapper onClick={(e) => e.stopPropagation()}>
      <CartIcon onClick={handleCartIconClick} />
      <ItemCount>{itemCount}</ItemCount>
      {showContent && (
        <CartContent
          cart={cart}
          products={products}
          onProductAddToCart={onProductAddToCart}
          onProductRemoveFromCart={onProductRemoveFromCart}
          onPurchase={onPurchase}
        />
      )}
    </CartWrapper>
  );
}
