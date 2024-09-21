import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
const theme = createTheme({
  palette: {
    primary: {
      main: '#EEEEEE', 
    },
    secondary: {
      main: '#393E46', 
    },
    background: {
      default: '#222831',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
