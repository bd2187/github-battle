"use strict"

import React from "react";
import queryString from "query-string";
import api from "../utils/api";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PlayerPreview from "./PlayerPreview";

function Player(props) {
  console.log(props.profile)
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    var players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then( (results) => {
      if (results === null) {
        return this.setState(function(){
          return {
            error: "Looks like there was an error. Check that both users exist on Github",
            loading: false
          }
        })
      }
      else {
        this.setState(function(){
          return {
            error: null,
            winner: results[0],
            loser: results[1],
            loading: false
          }
        })
      }
    });
  }
  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if (loading === true) {
      return <p>Loading</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      )
    }

    return (
      <div className="row">
        <Player
          label="Winner"
          score={winner.score}
          profile={winner.profile}
        />

        <Player
          label="Loser"
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}

export default Results;
