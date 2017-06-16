"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function SelectLanguage (props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  var {selectedLanguage, onSelect} = props;
  return (
    <div>
      <ul className='languages'>
        {languages.map(function(lang){
          return (
          <li
            style={lang === selectedLanguage ? {color: '#d0021b'} : null}
            key={lang}
            onClick={onSelect.bind(null, lang)}>
            {lang}
          </li>)
        })}
      </ul>
    </div>
  )
}

function RepoGrid (props) {
  var {repos} = props;
  return (
    <ul className='popular-list'>
      {repos.map(function (repo, index) {
        return (
          <li key={repo.full_name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

// 3 Things in Component: State, Life Cycle, UI

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  // initial state
      selectedLanguage: 'All',
      repos: null
    };
    // ensure that 'this' keyword in updateLanguage() is always the Popular component
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() { // invoked by React whenever Component mounts to screen/view
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    this.setState( function(){ // updates component's state
      return {
        selectedLanguage: lang,
        repos: null
      }
    });
    api.fetchPopularRepos(lang)
      .then( function(repos){
        this.setState(function(){
          return {
            repos: repos
          }
        })
      }.bind(this)) // returns new function with 'this' pointing to Popular
      .catch( function(err){
        console.log(err);
      } )
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <p id="loading">Loading</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    ); // {JSON.stringify(this.state.repos, null, 2)}
  }
}

export default Popular;
