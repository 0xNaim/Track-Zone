import ClockList from '../components/clock-list';
import LocalClock from '../components/local-clock';
import useClock from '../hooks/useClock';

const App = () => {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: edt } = useClock('EDT');
  const { clock: mst } = useClock('MST');
  const { clock: british } = useClock('BST');
  const { clock: pakistan } = useClock('UTC', 5 * 60);

  console.log('Local UTC', local.date);
  console.log('EST', est.date);
  console.log('PST', pst.date);
  console.log('EDT', edt.date);
  console.log('MST', mst.date);
  console.log('British', british.date);
  console.log('Pakistan', pakistan.date);

  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
};

export default App;
