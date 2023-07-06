import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f5f5f5',
      main: '#bdbdbd',
      dark: '#757575',
      contrastText: '#303030',
    },
    secondary: {
      light: '#a3b9dc',
      main: '#607d8b',
      dark: '#34568b',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
