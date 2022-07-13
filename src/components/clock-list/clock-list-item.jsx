import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
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
    </div>
  );
};

export default ClockListItem;
