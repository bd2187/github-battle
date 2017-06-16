"use strict";

import React from 'react';
import {NavLink} from 'react-router-dom';
// Link: change <a>
// NavLink: change style based on route you are at. Composes in Link and adds extra properties into it

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
