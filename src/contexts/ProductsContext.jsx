import { createContext, useContext } from 'react';
import useMockedProductsFetchData from '../mocks/useMockedProductsFetchData';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
  const { loading, error, products } = useMockedProductsFetchData();
  return (
    <ProductsContext.Provider value={{ loading, error, products }}>
      {children}
    </ProductsContext.Provider>
  );
}
