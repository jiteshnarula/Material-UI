import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/Theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <div>Home</div>} />
          <Route path="/services" exact component={() => <div>Serives</div>} />
          <Route
            path="/customsoftware"
            exact
            component={() => <div>Custom Software</div>}
          />
          <Route path="/websites" exact component={() => <div>Websites</div>} />
          <Route
            path="/revolution"
            exact
            component={() => <div>Revolution</div>}
          />
          <Route path="/about" exact component={() => <div>About</div>} />
          <Route path="/contact" exact component={() => <div>Contact</div>} />
          <Route path="/estimate" exact component={() => <div>Estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
