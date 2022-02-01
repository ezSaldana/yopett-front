import { createMuiTheme } from '@material-ui/core';
import './assets/fonts/fonts.css'

const lato = '"Lato", sans-serif';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Dosis', 'sans-serif'],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    h1: {
      fontFamily: lato
    },
    h2: {
      fontFamily: lato
    },
    h3: {
      fontFamily: lato
    },
    h4: {
      fontFamily: lato
    },
    h5: {
      fontFamily: lato
    },
    h6: {
      fontFamily: lato,
    }
  },

});
