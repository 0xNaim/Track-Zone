import ClockList from '../components/clock-list';
import LocalClock from '../components/local-clock';
import useClock from '../hooks/useClock';

const App = () => {
  const { date: localDate, timezone, offset } = useClock();

  return (
    <div>
      {localDate !== null && (
        <LocalClock date={localDate} timezone={timezone} offset={offset} />
      )}
      <ClockList />
    </div>
  );
};

export default App;
