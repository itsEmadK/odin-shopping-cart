import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  gap: 0.75rem;
  padding: 2px 4px;
`;

const Value = styled.p`
  flex: 1;
  text-align: center;
`;

const Button = styled.button`
  appearance: none;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

export default function Spinner({ value, onInc, onDec }) {
  return (
    <Wrapper>
      <Button onClick={onDec}>-</Button>
      <Value>{value}</Value>
      <Button onClick={onInc}>+</Button>
    </Wrapper>
  );
}
