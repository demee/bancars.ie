import React from 'react';
import './App.css';
import Tagcloud from './components/tagcloud/Tagcloud';
import Counters from './pages/Counters';

function App() {

  return (
    <div className="App">
      <Counters></Counters>
      <Tagcloud></Tagcloud>
      <footer className="footer">
        <p>
          This page uses cookies to analyze traffic&nbsp;
          <button type="button">Ok I do not care</button>
        </p>
      </footer>
    </div>
  );
}

export default App;
