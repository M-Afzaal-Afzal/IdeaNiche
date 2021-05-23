import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a lightTheme instance.
const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F81D3D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '80px',
      fontWeight: 400,
      lineHeight: 1,
    },
    h2: {
      fontSize: '36px',
      lineHeight: '1.4'
    },
    h3:{
      fontSize: "1.15rem",
    }
  }
});

export default lightTheme;
