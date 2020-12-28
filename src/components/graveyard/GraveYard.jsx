import React from 'react';
import grave from './grave.svg';

export default class GraveYard extends React.Component {
    graves() {        
        let s = [];            
        for (let i = 0; i < this.props.graves; i++) {
            s.push(<img key={i} width="20" height="20" alt="g" src={grave} />);             
        }      
        return s;
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col">
                    <h2>Deaths on the Irish roads in {this.props.year}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1> {this.props.graves} </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                {this.graves()}
                </div>
            </div>            
        </div>);
    }
}