import React, { useEffect, useState } from 'react';
import { DateTime, Interval } from 'luxon';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import './Counter.css';

export default function Counter(props) {
  const reasons = [
    'steal children independence',
    'pollute the air',
    'increase congestion',
    'make more noise',
    'kill more people',
    'kill more children',
    'make poeple sick',
    'make cities noisy',
    'erode local community connections',
    'terrorize pedestrians',
  ];
  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [reloadReason, setReloadReason] = useState(10);
  const [reasonNo, setReasonNo] = useState(0);
  const [reason, setReason] = useState(reasons[0]);

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

    if (!reloadReason) {
      setReasonNo(Math.floor(Math.random() * reasons.length));
      setReloadReason(10);
    } else {
      setReloadReason(reloadReason - 1);
    }

    setReason(reasons[reasonNo]);
    setBarWidth((((todayInt / int) * diff) % 1) * 100);
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
      <svg viewBox="0 0 100 25">
        <text x="5" y="17" style={{ fontFamily: 'Montserrat Alternates', fontSize: '20px' }}>
          <NumberFormat value={count} displayType="text" thousandSeparator renderText={(value) => value} />
          *
        </text>
        <rect x={100 - barWidth} y="20" width={barWidth} height="2" />
        <text x={100 - barWidth - 2} y="22" style={{ fontSize: '3px' }}>🚗</text>
        <text x={100 - barWidth + 2} y="21.5" style={{ fontSize: '2px', fill: '#fff' }}>{reason}</text>
      </svg>
      <h2>cars too many on irish roads, #bancars</h2>
      <span style={{ float: 'left', marginLeft: '10px' }}>* - estimated</span>
    </div>
  );
}

Counter.propTypes = {
  startDate: PropTypes.string.isRequired,
  targetDate: PropTypes.string.isRequired,
  targetCount: PropTypes.number.isRequired,
  startCount: PropTypes.number,
};

Counter.defaultProps = {
  startCount: 0,
};
