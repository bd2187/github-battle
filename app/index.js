var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React Training!</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
