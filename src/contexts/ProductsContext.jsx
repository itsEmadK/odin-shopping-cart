import { createContext, useContext } from 'react';
import useProductsFetchData from '../hooks/useProductsFetchData.js';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
  const { loading, error, products } = useProductsFetchData();
  return (
    <ProductsContext.Provider value={{ loading, error, products }}>
      {children}
    </ProductsContext.Provider>
  );
}
