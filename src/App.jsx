import './App.css';
import GraveYard from './components/graveyard/GraveYard';

function App() {
  return (
    <div className="App">      
      <GraveYard graves="143" year="2020"></GraveYard>
      <GraveYard graves="141" year="2019"></GraveYard>      
      <GraveYard graves="140" year="2018"></GraveYard>
      <GraveYard graves="156" year="2017"></GraveYard>
      <GraveYard graves="185" year="2016"></GraveYard>
      <a href="https://www.garda.ie/en/roads-policing/statistics/">source</a>
    </div>
  );
}

export default App;
