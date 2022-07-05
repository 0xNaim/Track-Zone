import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({ clock, updateClock, local = false }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    console.log(values);
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button>Delete</button>
      )}

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
    </div>
  );
};

export default ClockActions;
