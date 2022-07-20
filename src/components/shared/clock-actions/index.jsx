import { Box, Button } from '@mui/material';
import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({
  local = false,
  clock,
  createClock,
  updateClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          variant={'contained'}
          onClick={() => setIsEdit(!isEdit)}
          sx={{
            mr: 2,
            background: '#424242',
            '&:hover': {
              background: '#616161',
            },
          }}
        >
          Edit
        </Button>
        {local ? (
          <Button
            variant={'contained'}
            onClick={() => setIsCreate(!isCreate)}
            sx={{
              background: '#424242',
              '&:hover': {
                background: '#616161',
              },
            }}
          >
            Create
          </Button>
        ) : (
          <Button
            variant={'contained'}
            onClick={() => deleteClock(clock.id)}
            sx={{
              background: '#424242',
              '&:hover': {
                background: '#616161',
              },
            }}
          >
            Delete
          </Button>
        )}
      </Box>

      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            title={!local}
            values={clock}
            edit
            handleClock={updateClock}
          />
        </>
      )}

      {isCreate && (
        <>
          <h3>Clreate A New Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </Box>
  );
};

export default ClockActions;
