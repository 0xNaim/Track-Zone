const ClockDisplay = ({ title, date, timezone, offset }) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>{date.toLocaleTimeString()}</h3>
      <p>
        {timezone} | {offset / 60}
      </p>
    </div>
  );
};

export default ClockDisplay;
