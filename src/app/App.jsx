import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { generate } from 'shortid';
import ClockList from '../components/clock-list';
import LocalClock from '../components/local-clock';

const LOCAL_CLOCK_INIT = {
  title: 'Local Clock',
  timezone: 'GMT',
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = generate();
    setClocks((prev) => [...prev, clock]);
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const filteredClock = clocks.filter((clock) => clock.id !== id);
    setClocks(filteredClock);
  };

  return (
    <>
      <Box sx={{ background: '#424242', p: 1 }}>
        <Typography
          variant={'h3'}
          align={'center'}
          fontWeight={'400'}
          sx={{ fontSize: '2.5rem', color: '#fff' }}
        >
          Track Zone
        </Typography>
      </Box>
      <Container maxWidth={'md'}>
        <LocalClock
          clock={localClock}
          updateClock={updateLocalClock}
          createClock={createClock}
        />
        <ClockList
          localClock={localClock}
          clocks={clocks}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
      </Container>
    </>
  );
};

export default App;
