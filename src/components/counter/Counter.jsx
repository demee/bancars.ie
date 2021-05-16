import React from 'react';
import { DateTime, Interval } from 'luxon';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import './Counter.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barWidth: 0,
    };
    this.style = 'font-family: \'Roboto\';';
    this.reasons = [
      'steal children independence',
      'pollute the air',
      'increase congestion',
      'make more noise',
      'kill more people',
    ];
  }

  componentDidMount() {
    this.tick();
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const {
      startDate, targetDate, targetCount, startCount,
    } = this.props;

    const int = Interval.fromDateTimes(startDate, targetDate).count('seconds');

    if (int.invalid) {
      throw new Error(int.invalid);
    }

    const diff = targetCount - startCount;

    const todayInt = Interval.fromDateTimes(startDate, DateTime.local()).count('seconds');

    this.setState({
      barWidth: (((todayInt / int) * diff) % 1) * 100,
      count: startCount + Math.floor((todayInt / int) * diff),
    });
  }

  render() {
    const { count, barWidth } = this.state;
    const r = `a new one is coming to ${this.reasons[Math.floor(Math.random() * this.reasons.length)]}`;
    return (
      <div>
        <h2>There are</h2>
        <svg viewBox="0 0 100 25">
          <defs>
            <style type="text/css">
              @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);
            </style>
          </defs>
          <text x="5" y="17" style={{ fontFamily: 'Yusei Magic', fontSize: '20px' }}>
            <NumberFormat value={count} displayType="text" thousandSeparator renderText={(value) => value} />
          </text>

          <rect x={100 - barWidth} y="20" width={barWidth} height="2" />
          <text x={100 - barWidth - 2} y="22" style={{ fontSize: '3px' }}>🚗</text>
          <text x={100 - barWidth + 2} y="21.5" style={{ fontSize: '2px', fill: '#fff' }}>{r}</text>
        </svg>
        <h2>cars too many on irish roads, #bancars</h2>
        <span style={{ float: 'left', marginLeft: '10px' }}>* - estimated</span>
      </div>
    );
  }
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
