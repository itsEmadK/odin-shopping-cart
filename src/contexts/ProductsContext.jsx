import { createContext, useContext } from 'react';
import useMockedProductsFetchData from '../mocks/useMockedProductsFetchData';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
  const data = useMockedProductsFetchData();
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  );
}
