import React from 'react';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.margin = {
            top: 10, 
            bottom: 10, 
            left: 10, 
            right: 10
        }
        this.width = 1920;
        this.height = 1080
        this.state = {
            viewBox: `0,0,${this.width},${this.height}`,
            translateXAxis: `translate(0,${this.height - this.margin.bottom})`
        };
    }

    renderXAxis() {
        return <g transform={this.state.translateXAxis}></g>
    }

    renderYAxis() {
        return <text>Yaxis</text>
    }

    render() {
        const XAxis = this.renderXAxis();
        const Yaxis = this.renderYAxis();

        return (<svg viewBox={this.state.viewBox}>
                {XAxis}{Yaxis}
        </svg>);
    }
}