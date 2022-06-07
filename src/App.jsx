import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Tagcloud from './components/tagcloud/Tagcloud';
import TagBody from './pages/TagBody/TagBody';

function App() {
  return (
    <div className="App">
      <head>
        <div className="menubar">🍔</div>
      </head>
      <Routes>
        <Route path="/" element={<Tagcloud />} />
        <Route path="/tags/:tag" element={<TagBody />} />
      </Routes>
      <footer className="footer">
        <p>
          &nbsp; This page uses cookies to analyze traffic
        </p>
      </footer>
    </div>
  );
}

export default App;
