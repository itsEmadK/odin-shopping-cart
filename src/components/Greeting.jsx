import styled from 'styled-components';
import devices from '../util/device';

const StyledH1 = styled.h1`
  background-color: burlywood;
  font-size: 3rem;
  @media ${devices.tablet} {
    font-size: 2rem;
    background-color: red;
  }
`;

export default function Greeting({ name }) {
  return <StyledH1>Hello {name}!</StyledH1>;
}
