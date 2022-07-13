import ClockListItem from './clock-list-item';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {!clocks.length && <h6>There is no clock! Please create a clock.</h6>}
      <div>
        {clocks?.map((clock) => (
          <ClockListItem
            key={clock.id}
            clock={clock}
            localClock={localClock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockList;
