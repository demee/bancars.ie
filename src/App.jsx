import React from 'react';
import './App.css';
import Tagcloud from './components/tagcloud/Tagcloud';
import Counters from './pages/Counters';

function App() {
  return (
    <div className="App">
      <Counters />
      
      <footer className="footer">
        <p>
          &nbsp; This page uses cookies to analyze traffic
        </p>
      </footer>
    </div>
  );
}

export default App;
