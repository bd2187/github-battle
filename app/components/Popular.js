"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function SelectLanguage (props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <div>
      <ul className='languages'>
        {languages.map(function(lang){
          return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>)
        })}
      </ul>
    </div>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

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
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
