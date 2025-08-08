import { createContext, useContext, useMemo, useReducer } from 'react';

// const CartContext = createContext();
const CartDataContext = createContext();
const CartApiContext = createContext();

export const useCartData = () => useContext(CartDataContext);
export const useCartApi = () => useContext(CartApiContext);

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const api = useMemo(
    () => ({
      addToCart: (productId) => {
        dispatch({ type: 'addProduct', productId });
      },
      removeFromCart: (productId) => {
        dispatch({ type: 'removeProduct', productId });
      },
      purchase: () => {
        dispatch({ type: 'purchase' });
      },
    }),
    []
  );
  return (
    <CartDataContext.Provider value={cart}>
      <CartApiContext.Provider value={api}>
        {children}
      </CartApiContext.Provider>
    </CartDataContext.Provider>
  );
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'addProduct': {
      const newCart = { ...state };
      if (newCart[action.productId]) {
        newCart[action.productId] = newCart[action.productId] + 1;
      } else {
        newCart[action.productId] = 1;
      }
      return newCart;
    }
    case 'removeProduct': {
      const newCart = { ...state };
      if (newCart[action.productId]) {
        if (newCart[action.productId] === 1) {
          delete newCart[action.productId];
        } else {
          newCart[action.productId] = newCart[action.productId] - 1;
        }
      }
      return newCart;
    }
    case 'purchase': {
      const newCart = {};
      return newCart;
    }

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
