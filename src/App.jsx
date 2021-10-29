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
      <footer>
         <p>This page uses cookies to analyze traffic <button>Ok I do not care</button></p>
      </footer>
    </div>
  );
}

export default App;
