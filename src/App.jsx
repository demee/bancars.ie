import React from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Home from './pages/home/Home';
import TagBody from './pages/TagBody/TagBody';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#504d44',
    },
    error: {
      main: '#504d44',
    },
    warning: {
      main: '#B5A581',
    },
    info: {
      main: '#9CABB5',
    },
    success: {
      main: '#A3B59C',
    },
  },
});

const globalSyle = {
  body: {
    backgroundColor: '#D4D0C5',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
