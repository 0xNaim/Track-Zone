import styled from 'styled-components';
import BaseClock from '../components/clock/BaseClock';
import CreateClock from '../components/clock/CreateClock';

const App = () => {
  return (
    <>
      <Header>
        <H1>Track Zone</H1>
      </Header>
      <hr />
      <BaseClock />
      <CreateClock />
    </>
  );
};

export default App;

const Header = styled.header`
  text-align: center;
  padding: 1.5rem 0;
`;
const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
