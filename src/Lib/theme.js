import createTheme from '@mui/material/styles/createTheme';

let theme = createTheme();
theme = createTheme({
  breakpoints: {
    xs: 360,
  },
  palette: {
    red: {
      main: '#C94A14',
    },
    orange: {
      main: '#F3A73B',
    },
    pink:{
      main: '#C659A7',
    },
    green: {
      main: '#309E1E'
    },
    black: {
      main: '#000000'
    },
    gray: {
      main: '#E5E5E5'
    },
    bgColor: {
      main: '#F2EFE8'
    },
  },
})

export default theme;
