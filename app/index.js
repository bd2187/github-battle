var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div> // JSX
        <h1>Hello World!</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#app');
);
