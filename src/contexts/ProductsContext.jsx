import { createContext, useContext } from 'react';
import useMockedProductsFetchData from '../mocks/useMockedProductsFetchData';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
  const { isLoading, error, products } = useMockedProductsFetchData();
  return (
    <ProductsContext.Provider value={{ isLoading, error, products }}>
      {children}
    </ProductsContext.Provider>
  );
}
