import './App.css';
import Counter from './components/counter/Counter';
import { DateTime } from 'luxon';

function App() {
  let carCountStart = 2805839;
  let carCountTarget = 2805839 + 88000 + 100000; 
  let carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  let carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });
  return (
    <div className="App">      
        <Counter 
          startDate={carCountDateStart}
          targetDate={carCountDateEnd}
          startCount={carCountStart} 
          targetCount={carCountTarget}>
        </Counter>
    </div>
  );
}

export default App;
