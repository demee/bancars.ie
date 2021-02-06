import React from 'react';
import { DateTime, Interval } from 'luxon';

import './Counter.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.targetDate = DateTime.fromFormat("2021", "y");
        this.targetCount = 3000000;
        this.startDate = DateTime.fromFormat("2019", "y");
        this.startCount = 2805839;
        this.state = {
            count: 0
        };
        this.style = "font-family: 'Roboto';";
        setInterval(() => {
            console.log('recalculating')
            this.recalculate() 
        }, 1000)
    }
    recalculate() {
        let int = Interval.fromDateTimes(this.startDate, this.targetDate).count('seconds');
        
        let diff = this.targetCount - this.startCount; 

        let todayInt = Interval.fromDateTimes(this.startDate, DateTime.local()).count('seconds');

        this.setState({
            count: this.startCount + Math.round((todayInt/int) * diff)
        });
    }
    
    render() {
        return (<div>
            <h2>There are</h2>
            <svg viewBox="0 0 60 18">
                <defs>
                    <style type="text/css">
                        @import url('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic');
                    </style>
                </defs>

                <text x="0" y="15" style={{fontFamily: 'Yusei Magic'}} >{this.state.count}</text>
            </svg>
            <h2>cars on irish roads</h2>
            <marquee behaviour="slide" true>🚗 🚕 🚙 🚌 🚎 🚓 🚚 🚐 🚜 🚗 🚕 🚙 🚌 🚎 🚓 🚚 🚐 🚜 🚗 🚕 🚙 🚌 🚎 🚓 🚚 🚐 🚜 🚗 🚕 🚙 🚌 🚎 🚓 🚚 🚐 🚜 🚗 🚕 🚙 🚌 🚎 🚓 🚚 🚐 🚜 </marquee>
        </div>)
    }
}