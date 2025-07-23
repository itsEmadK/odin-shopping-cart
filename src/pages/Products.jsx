import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
`;

export default function Products({
  onProductAddToCart,
  onProductRemoveFromCart,
}) {
  const { loading, products, error, cart } = useOutletContext();

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return error.toString();
  }

  return (
    <>
      <Heading>Products</Heading>
      <Grid>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={() => onProductAddToCart(p.id)}
            onRemoveFromCart={() => onProductRemoveFromCart(p.id)}
            count={cart[p.id] ? cart[p.id] : 0}
          />
        ))}
      </Grid>
    </>
  );
}
