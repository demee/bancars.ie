import React from 'react';
import GraveYard from '../graveyard/GraveYard'

export default class Cementary extends React.Component {
    state = { deaths: []};    
    async componentDidMount() {         
        const deaths = await this.fetchDeathData();
        this.setState({deaths: deaths.data.deaths })
    }
    async fetchDeathData() {
        const response = await fetch('/data/deaths.json');
        return response.json();
    }
    render() {
        const i = this.state.deaths.map(death => {
            return <GraveYard year={death.year} graves={death.deaths} key={death.year}></GraveYard>
        }); 

        return (<div>{i}</div>);            
    }
}