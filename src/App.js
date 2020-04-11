import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Switch>
    </Router>
  );
}

export default App;
