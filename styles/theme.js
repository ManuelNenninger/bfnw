import { createTheme } from '@mui/material/styles';

// Create a theme instance.
//typography: Base Scale 14px und Scale 1.2
const theme = createTheme({
  palette: {
    primary: {
      main: '#4DA889',
      light: "#B9DFD2",
      dark: "#408C73",
    },
    secondary: {
      main: '#ADADAD',
      light: "#B9DFD2",
      dark: "#C2C2C2",
    },
    error: {
      main: "#B00020",
    },
    borderColor: {
      main: '#bdbdbd',
    }
  },
  typography: {
    h1: {
      fontSize: "2.986rem",
    },
    h2: {
      fontSize: "2.488rem",
    },
    h3: {
      fontSize: "2.074rem",
    },
    h4: {
      fontSize: "1.728rem",
    },
    h5: {
      fontSize: "1.44rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.833rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.833rem",
    },
    button: {
      fontSize: "0.833rem",
    },
  }
});

export default theme;
