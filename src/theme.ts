import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Petrona", serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 900,
      md: 1200,
      lg: 1536,
      xl: 1920,
    },
  },
});

export default theme;
