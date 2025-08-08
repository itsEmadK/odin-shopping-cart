import { useEffect, useState } from 'react';
import productsJson from './products.json';

const DELAY = 500;

export default function useMockedProductsFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
