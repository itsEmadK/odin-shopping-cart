import styled from 'styled-components';
import theme from '../util/theme.json';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const StyledHeader = styled.header`
  background-color: ${theme.schemes.light.primary};
  color: ${theme.schemes.light.onPrimary};
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  flex: 1;
  cursor: default;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${theme.schemes.light.onPrimary};
  font-size: 0.9rem;
  transition: transform 0.2s ease;
  display: block;
  &:hover {
    transform: scale(1.075);
  }
  border-bottom: ${({ selected }) =>
    selected ? `2px solid ${theme.schemes.light.onPrimary}` : 'none'};
`;

// TODO: Remove cart param def value
export default function Header() {
  const path = useLocation().pathname;

  return (
    <StyledHeader>
      <StyledH1>ShopShop</StyledH1>
      <nav>
        <NavList>
          <li>
            <NavItem to={'/'} selected={path === '/'}>
              Home
            </NavItem>
          </li>
          <li>
            <NavItem to={'products'} selected={path === '/products'}>
              Products
            </NavItem>
          </li>
          <li>
            <ShoppingCart />
          </li>
        </NavList>
      </nav>
    </StyledHeader>
  );
}
