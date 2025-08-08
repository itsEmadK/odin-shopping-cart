import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();
const CartDataContext = createContext();
const CartApiContext = createContext();

export const useCartData = () => useContext(CartDataContext);
export const useCartApi = () => useContext(CartApiContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});
  return (
    <CartDataContext.Provider value={cart}>
      <CartApiContext.Provider value={setCart}>
        {children}
      </CartApiContext.Provider>
    </CartDataContext.Provider>
  );
}
