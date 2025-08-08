import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import useFetchData from '../hooks/useFetchData';
import { useState } from 'react';
import CartContextProvider from '../contexts/CartContext';
import ProductsContextProvider from '../contexts/ProductsContext';
// const url = `https://fakestoreapi.com/products/`;

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
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Header />
        <OuterOutletWrapper>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </OuterOutletWrapper>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
