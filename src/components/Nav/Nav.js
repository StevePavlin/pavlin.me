import React, { Component } from 'react';
import './Nav.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import { Skills } from "../Skills";
import { Contact } from "../Contact";

export class Nav extends Component {
  render() {
    return (
      <div className="nav-content">
        <nav>
          <NavLink to='/skills'><i className="fas fa-chart-bar"/></NavLink>
          <NavLink to='/contact'><i className="fas fa-address-card"/></NavLink>
        </nav>

        <div className="outlet">
          <Switch>
            <Route path='/skills' component={Skills}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </div>
    );
  }
}