import styled from 'styled-components';
import theme from '../util/theme.json';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
  justify-items: center;
  align-self: center;
`;

const Title = styled.h2`
  color: ${theme.schemes.light.onBackground};
`;

const StartButton = styled(Link)`
  background-color: ${theme.schemes.light.primaryContainer};
  color: ${theme.schemes.light.onPrimaryContainer};
  border: 2px solid ${theme.schemes.light.onPrimaryContainer};
  padding: 4px 8px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: ${theme.schemes.light.prim};
  }
  text-decoration: none;
`;

export default function Home() {
  return (
    <Container>
      <Title>Enter another galaxy by shopping from us!</Title>
      <StartButton to={'products'}>Start Shopping</StartButton>
    </Container>
  );
}
