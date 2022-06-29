import React from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Home from './pages/home/Home';
import TagBody from './pages/TagBody/TagBody';
import defaultTheme from './themes/Default';

const globalSyle = {
  body: {
    backgroundColor: '#D4D0C5',
  },
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalSyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tags/:tag" element={<TagBody />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
