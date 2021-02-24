import React from 'react';
import { DateTime, Interval } from 'luxon';
import NumberFormat from 'react-number-format';

import './Counter.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.targetDate = DateTime.fromObject({ year: 2021, month: 12, day: 31 });
        this.targetCount = 2805839 + 88000 + 100000;
        this.startDate = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
        this.startCount = 2805839;
        this.state = {};
        this.style = "font-family: 'Roboto';";    
    }
    tick() {
        console.log('tick')
        let int = Interval.fromDateTimes(this.startDate, this.targetDate).count('seconds');

        let diff = this.targetCount - this.startCount;

        let todayInt = Interval.fromDateTimes(this.startDate, DateTime.local()).count('seconds');

        this.setState({
            barWidth: ((todayInt/int * diff) % 1) * 100,
            count: this.startCount + Math.floor((todayInt / int) * diff)
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (<div>
            <h2>There are</h2>
            <svg viewBox="0 0 100 25">
                <defs>
                    <style type="text/css">
                        @import url('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic');
                    </style>
                </defs>
                <text x="5" y="17" style={{ fontFamily: 'Yusei Magic', fontSize: '20px'}} >
                    <NumberFormat value={this.state.count}  displayType={'text'} thousandSeparator={true} renderText={value => value}/>
                </text>
                <rect x={100 - this.state.barWidth} y="20" width={this.state.barWidth} height="2"></rect>
                <text x={100 - this.state.barWidth - 2} y="22" style={{fontSize: '3px'}}>🚗</text>
                <text x={100 - this.state.barWidth + 2} y="21.5" style={{fontSize: '2px', fill: '#fff'}}>a new one is coming... brum brum</text>
            </svg>
            <h2>cars too many on irish roads, #bancars</h2>         
        </div>)
    }
}