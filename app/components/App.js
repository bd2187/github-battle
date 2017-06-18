 "use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Popular from './Popular';
import {
  BrowserRouter as Router,
  Route,
  Switch
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
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/battle" component={Battle}/>
            <Route path="/battle/results" component={Results}/>
            <Route path="/popular" component={Popular}/>
            <Route render={() => <h1>Not Found</h1>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
