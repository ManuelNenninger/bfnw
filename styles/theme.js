import { createTheme } from '@mui/material/styles';

// Create a theme instance.
//typography: Base Scale 14px und Scale 1.2 theme.palette.primary.dark
const theme = createTheme({
  palette: {
     primary: {
       main: '#4DA889',
       light: "#B9DFD2",
       dark: "#408C73",
       veryLight: '#D5ECE4',
     },
    secondary: {
      main: '#a7a7a7',
      light: "#B9DFD2",
      dark: "#C2C2C2",
      lightGray: "#c4c4c4",
      veryLightGray: "#dadada",
    },
    error: {
      main: "#B00020",
    },
    text: {
      subtitleColor: "#3D3D3D",
    },
    borderColor: {
      main: '#bdbdbd',
      dark: '#292727',
    },
    mentionsColor: {
      twitter: '#1DA1F2',
      youTube: '#FF0000',
    },
    homePageButtonColor: {
      main: '#FFFFFF'
    },
    backgroundTypography: {
      main: "rgba(255,255,255, 0.5)",
    },
  },
  typography: {
    //fontFamily: "'IBM Plex Mono', monospace",
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
      lineHeight: "1.8rem",
    },
    subtitle2: {
      fontSize: "0.833rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.8rem",
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
