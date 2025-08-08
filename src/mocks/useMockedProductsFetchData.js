import { useEffect, useState } from 'react';
import productsJson from './products.json';

const DELAY = 1000;

export default function useMockedProductsFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, _] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(resolve, DELAY);
    }).then(() => {
      setProducts(productsJson);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, products, error };
}
