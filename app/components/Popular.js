"use strict";

import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All' // initial state
    };

    // ensure that 'this' keyword in updateLanguage() is always the Popular component
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState( function(){ // updates component's state
      return {
        selectedLanguage: lang
      }
    } )
  }

  render() {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        <ul className='languages'>
          {languages.map(function(lang){
            return (
            <li
              style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
              key={lang}
              onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>)
          }, this)}
        </ul>
      </div>
    );
  }
}

export default Popular;
