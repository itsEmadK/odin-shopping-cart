import { useParams } from 'react-router-dom';

export default function ProductInfo() {
  const { productId } = useParams();
  return <>Product: {productId}</>;
}
