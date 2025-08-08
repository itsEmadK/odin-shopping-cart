import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { useProducts } from '../contexts/ProductsContext';
import { useCartApi, useCartData } from '../contexts/CartContext';

const Wrapper = styled.div``;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
`;

export default function Products() {
  const { isLoading, error, products } = useProducts();
  const cart = useCartData();
  const cartApi = useCartApi();

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return error.toString();
  }

  const handleAddProduct = (id) => {
    cartApi.addToCart(id);
  };
  const handleRemoveProduct = (id) => {
    cartApi.removeFromCart(id);
  };

  return (
    <Wrapper>
      <Heading>Products</Heading>
      <Grid>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={() => handleAddProduct(p.id)}
            onRemoveFromCart={() => handleRemoveProduct(p.id)}
            count={cart[p.id] ? cart[p.id] : 0}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}
