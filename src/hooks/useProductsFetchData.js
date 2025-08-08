import useFetchData from './useFetchData.js';

const API_URL = `https://fakestoreapi.com/products/`;
export default function useProductsFetchData() {
  const { loading, error, data: products } = useFetchData(API_URL);
  return { loading, error, products };
}
