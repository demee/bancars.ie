import { createTheme } from '@mui/material/styles';
import MontserratAlternates from '../fonts/MontserratAlternates-Regular.ttf';

export default createTheme({
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
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat Alternates';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat Alternates'), url(${MontserratAlternates}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  typography: {
    fontFamily: 'Montserrat Alternates, Arial, sans-serif',
  },
});
