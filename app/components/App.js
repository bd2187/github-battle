"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Popular from './Popular';

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

export default App;
