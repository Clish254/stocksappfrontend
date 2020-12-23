import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={PageA} />
      <Route path="/pagea" component={PageA} />
      <Route path="/pageb" component={PageB} />
    </Router>
  );
};

export default App;
