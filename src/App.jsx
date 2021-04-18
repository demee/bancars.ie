import React from 'react';
import { DateTime } from 'luxon';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  const carCountStart = 2805839;
  const carCountTarget = 2805839 + 88000 + 100000;
  const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });
  return (
    <div className="App">
      <Counter
        startDate={carCountDateStart}
        targetDate={carCountDateEnd}
        startCount={carCountStart}
        targetCount={carCountTarget}
      />
    </div>
  );
}

export default App;
