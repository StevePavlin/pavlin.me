import React, { Component } from 'react';
import './Nav.css';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import { Skills } from "../Skills";
import { Contact } from "../Contact";
import { Portfolio } from '../Portfolio';

export class Nav extends Component {
  render() {
    return (
      <div className="nav-content">
        <nav>
          <NavLink to='/skills'><i className="fas fa-chart-bar"/></NavLink>
          <NavLink to='/portfolio'><i className="fas fa-desktop"/></NavLink>
          <NavLink to='/contact'><i className="fas fa-address-card"/></NavLink>
        </nav>

        <div className="outlet">
          <Redirect from="/" to="/skills" />
          <Switch>
            <Route path='/skills' component={Skills}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
          </Switch>

        </div>
      </div>
    );
  }
}