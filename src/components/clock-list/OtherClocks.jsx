import { Box, Typography } from '@mui/material';
import { format, formatDistance } from 'date-fns';

const OtherClocks = ({ title, date, localClock, timezone, offset }) => {
  const offsetHr = offset / 60;

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant={'h4'} fontWeight={'medium'} sx={{ mb: 3 }}>
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
        <Typography variant={'h5'} sx={{ mr: 1 }}>
          {format(date, 'hh:mm:ss a')}
        </Typography>
        <Typography variant={'body2'}>
          ({timezone}
          {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`})
        </Typography>
      </Box>
      <Typography variant={'h6'}>
        {format(date, 'd LLL y')} ({format(date, 'E')})
      </Typography>
      {localClock && (
        <Typography variant={'body1'}>
          Time difference {formatDistance(localClock.date, date)}
        </Typography>
      )}
    </Box>
  );
};

export default OtherClocks;
