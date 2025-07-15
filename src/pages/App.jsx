import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

const OutletWrapper = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
}

export default App;
