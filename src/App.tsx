import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';
import { StickyWindow } from "./StickyWindow";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StickyWindow>test</StickyWindow>
    </ThemeProvider>
  );
}

export default App;
