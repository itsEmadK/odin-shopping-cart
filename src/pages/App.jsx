import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import useFetchData from '../hooks/useFetchData';
import { useState } from 'react';
const url = `https://fakestoreapi.com/products/`;

const OuterOutletWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OutletWrapper = styled.div`
  padding: 1rem;
  display: grid;
  flex: 1;
  max-width: 1920px;
`;

function App() {
  const [cart, setCart] = useState({});
  const { loading, data: products, error } = useFetchData(url);

  const onProductAddToCart = (id) => {
    const newCart = { ...cart };
    if (newCart[id]) {
      newCart[id]++;
    } else {
      newCart[id] = 1;
    }
    setCart(newCart);
  };

  const onProductRemoveFromCart = (id) => {
    const newCart = { ...cart };
    if (!newCart[id]) {
      return;
    }
    newCart[id]--;
    if (newCart[id] === 0) {
      newCart[id] = undefined;
    }
    setCart(newCart);
  };

  const onPurchase = () => {
    setCart({});
  };

  return (
    <>
      <Header
        cart={cart}
        products={products}
        onProductAddToCart={onProductAddToCart}
        onProductRemoveFromCart={onProductRemoveFromCart}
        onPurchase={onPurchase}
      />
      <OuterOutletWrapper>
        <OutletWrapper>
          <Outlet
            context={{
              loading,
              products,
              error,
              cart,
              onProductAddToCart,
              onProductRemoveFromCart,
            }}
          />
        </OutletWrapper>
      </OuterOutletWrapper>
    </>
  );
}

export default App;
