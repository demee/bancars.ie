import React from 'react';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Articles from './pages/articles/Articles';
import About from './pages/about/About';
import defaultTheme from './themes/Default';

const globalSyle = {
  body: {
    backgroundColor: '#D4D0C5',
    fontFamily: 'Montserrat Alternates',
  },
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalSyle} />
      <Box sx={{
        fontFamily: 'Montserrat Alternates',
      }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<Articles />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
