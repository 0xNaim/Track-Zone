import { useState } from 'react';
import styled from 'styled-components';

const CreateClock = () => {
  const [zone, setZone] = useState([]);

  return (
    <Container>
      <H1>Create a new clock</H1>
      <Span>Selete a Time Zone</Span>
      <br />

      <Select>
        {timeZones.map((zone, i) => (
          <option key={i} value={zone}>
            {zone}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default CreateClock;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  border: 1px solid #333;
  margin: 2rem;
  margin-top: 10rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Span = styled.span`
  font-size: 1rem;
  text-align: center;
`;

const Select = styled.select`
  width: 50%;
  padding: 0.3rem;
  border: 1px solid #333;
  margin-top: 1rem;
`;
