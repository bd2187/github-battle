"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home}/>
          <Route path="/battle" component={Battle}/>
          <Route path="/popular" component={Popular}/>
        </div>
      </Router>
    );
  }
}

export default App;
