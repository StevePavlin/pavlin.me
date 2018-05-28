import React, { Component } from 'react';
import './Portfolio.css';
import { Switch, Link, Route, NavLink } from 'react-router-dom';
import { ClipThat } from "./ClipThat";


export class Portfolio extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className="skills">
        <h3>Projects</h3>
        <p>
          Alot of stuff I work on is under NDA ...
          <br />
          ... but I'll show you the stuff I can here 😊
        </p>
        <ul className="vanilla">
          <li>
            <NavLink to="/portfolio/clipthat">
              <i className="fab fa-node-js"/>
              ClipThat Reddit Bot
            </NavLink>
          </li>
          <li>
            <span className="fake-link muted">
              <i className="fas fa-question"/>
              More soon!
            </span>
          </li>
        </ul>

        <Switch>
          <Route path="/portfolio/clipthat" component={ClipThat} />
        </Switch>
      </div>
    );
  }
}