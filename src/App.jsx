import React from 'react';
import './App.css';
import Tagcloud from './components/tagcloud/Tagcloud';

function App() {
  return (
    <div className="App">
      <Tagcloud />
      <footer className="footer">
        <p>
          &nbsp; This page uses cookies to analyze traffic
        </p>
      </footer>
    </div>
  );
}

export default App;
