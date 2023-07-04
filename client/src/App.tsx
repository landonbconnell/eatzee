import React from "react";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f5f5f5",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#303030",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "primary.light" }}>
        <HomePage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
