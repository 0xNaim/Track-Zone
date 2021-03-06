import { Box, Typography } from '@mui/material';
import { format, formatDistance } from 'date-fns';

const ClockDisplay = ({ title, date, localClock, timezone, offset }) => {
  const offsetHr = offset / 60;

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant={'h3'} fontWeight={'medium'} sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <Typography variant={'h3'} sx={{ mr: 1 }}>
          {format(date, 'hh:mm:ss a')}
        </Typography>
        <Typography variant={'h5'}>
          ({timezone}
          {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`})
        </Typography>
      </Box>
      <Typography variant={'h4'}>
        {format(date, 'd LLL y')} ({format(date, 'E')})
      </Typography>
      {localClock && (
        <Typography variant={'h6'}>
          Time difference {formatDistance(localClock.date, date)}
        </Typography>
      )}
    </Box>
  );
};

export default ClockDisplay;
