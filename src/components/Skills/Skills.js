import React, { Component } from 'react';
import './Skills.css';
import { Switch, Link, NavLink, Route, Redirect } from 'react-router-dom';
import { Node } from "./Node";
import { ReactRedux } from "./ReactRedux";
import {Postgres} from "./Postgres";
import { Analytics } from "./Analytics";
import { UIUX } from './UIUX';


export class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: {}
    }
  };

  render() {

    return (
      <div className="skills">
        <h3>Skills</h3>
        <ul className="vanilla">
          <li className="node">
            <NavLink to="/skills/node-js">
              <i className="fab fa-node-js"/>Node.js
            </NavLink>
          </li>
          <li className="sql">
            <NavLink to="/skills/sql">
              <i className="fas fa-database"/>PostgreSQL
            </NavLink>
          </li>
          <li className="react">
            <NavLink to="/skills/react">
              <i className="fab fa-react"/>React/Redux
            </NavLink>
          </li>
          <li className="analytics">
            <NavLink to="/skills/analytics">
              <i className="fas fa-chart-pie"/>Analytics
            </NavLink>
          </li>
          <li className="ui-ux">
            <NavLink to="/skills/ui-ux">
              <i className="fas fa-object-ungroup"/>UI/UX
            </NavLink>
          </li>
        </ul>

        <div className="outlet">
          <Redirect from="/skills" to="/skills/node-js" />
          <Switch>
            <Route path="/skills/node-js" component={Node} />
            <Route path="/skills/sql" component={Postgres} />
            <Route path="/skills/react" component={ReactRedux} />
            <Route path="/skills/analytics" component={Analytics} />
            <Route path="/skills/ui-ux" component={UIUX} />
          </Switch>
        </div>
      </div>
    );
  }
}