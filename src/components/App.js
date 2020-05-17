import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/Theme";
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
