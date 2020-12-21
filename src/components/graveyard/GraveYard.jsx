import React from 'react';
import grave from './grave.svg';

export default class GraveYard extends React.Component {
    graves() {        
        let s = [];            
        for (let i = 0; i < this.props.graves; i++) {
            s.push(<img width="20" height="20" alt="g" src={grave} />);             
        }      
        return s;
    }
    render() {
        return (<div class="container">
            <div class="row">
                <div class="col">
                    <h2>Deaths on the Irish roads in 2019</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1> {this.props.graves} </h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                {this.graves()}
                </div>
            </div>            
        </div>);
    }
}