import { format, formatDistance } from 'date-fns';
import classes from './index.module.css';

const ClockDisplay = ({ title, date, localClock, timezone, offset }) => {
  const offsetHr = offset / 60;

  return (
    <div className={classes.card}>
      ff
      <h1>Title: {title}</h1>
      <h3>{format(date, 'hh:mm:ss a')}</h3>
      <p>
        {timezone} |{' '}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </p>
      {localClock && <h3>{formatDistance(localClock.date, date)}</h3>}
    </div>
  );
};

export default ClockDisplay;
