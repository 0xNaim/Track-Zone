import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ date, timezone, offset }) => {
  return (
    <div>
      <ClockDisplay
        date={date}
        title={'Local Clock'}
        timezone={timezone}
        offset={offset}
      />
    </div>
  );
};

export default LocalClock;
