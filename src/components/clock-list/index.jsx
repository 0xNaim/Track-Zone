import { Box, Divider, Grid, Typography } from '@mui/material';
import ClockListItem from './clock-list-item';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant={'h6'}>Other Clocks</Typography>
      <Divider sx={{ mb: 2 }} />
      {!clocks.length && (
        <Typography variant={'body1'} sx={{ mt: 2 }}>
          There is no clock! Please create a clock.
        </Typography>
      )}

      <Box>
        <Grid container spacing={2}>
          {clocks?.map((clock) => (
            <Grid item key={clock.id} xs={12} sm={6} md={4}>
              <ClockListItem
                clock={clock}
                localClock={localClock}
                updateClock={updateClock}
                deleteClock={deleteClock}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClockList;
