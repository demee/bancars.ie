import React, { useEffect, useState } from 'react';
import { DateTime, Interval } from 'luxon';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

import './Counter.css';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function tick() {
    const {
      startDate, targetDate, targetCount, startCount,
    } = props;

    const int = Interval.fromDateTimes(startDate, targetDate).count('seconds');

    if (int.invalid) {
      throw new Error(int.invalid);
    }

    const diff = targetCount - startCount;
    const todayInt = Interval.fromDateTimes(startDate, DateTime.local()).count('seconds');
    setCount(startCount + Math.floor((todayInt / int) * diff));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h2>There are</h2>
      <h1><NumericFormat value={count} displayType="text" thousandSeparator renderText={(value) => value} /></h1>
      <h2>cars too many on irish roads, #bancars</h2>
      <span style={{ float: 'left', marginLeft: '10px' }}>* - estimated</span>
    </div>
  );
}

Counter.propTypes = {
  startDate: PropTypes.instanceOf(DateTime).isRequired,
  targetDate: PropTypes.instanceOf(DateTime).isRequired,
  targetCount: PropTypes.number.isRequired,
  startCount: PropTypes.number,
};

Counter.defaultProps = {
  startCount: 0,
};
