import { Box } from '@mui/material';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import OtherClocks from './OtherClocks';

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  return (
    <Box
      sx={{
        background: '#dddddd',
        p: 2,
        border: 2,
        borderRadius: 1,
        width: '300px',
      }}
    >
      {date && timer && (
        <OtherClocks
          date={timer}
          localClock={localClock}
          title={clock.title}
          timezone={clock.timezone}
          offset={clock.offset}
        />
      )}

      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </Box>
  );
};

export default ClockListItem;
