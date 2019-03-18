import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Grid from './Grid/Grid';
import Detail from './Detail/Detail';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Grid} />
        <Route exact path="/shows" component={Grid} />
      </div>
    </Router>
  );
}

export default App;