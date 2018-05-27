import React, { Component } from 'react';
import './Skills.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import { Node } from "./Node";
import { ReactRedux } from "./ReactRedux";
import {Postgres} from "./Postgres";


const skills = [
  {
    slug: 'node',
    icon: 'fab fa-node-js',
    name: 'Node.js',
    component: <Node />
  },
  {
    slug: 'sql',
    icon: 'fas fa-database',
    name: 'PostgreSQL',
    component: <Postgres />
  },
  {
    slug: 'react',
    icon: 'fab fa-react',
    name: 'React/Redux',
    component: <ReactRedux />
  },
  {
    slug: 'ui-ux',
    icon: 'fas fa-object-ungroup',
    name: 'UI/UX',
    component: <Node />
  },
  {
    slug: 'analytics',
    icon: 'fas fa-chart-pie',
    name: 'Analytics',
    component: <Node />
  }
];

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
        <ul className="vanilla">
          {
            skills.map((skill, index) => {
              const active = skill.slug === this.state.open.slug;

              return (
                <li
                  key={index}
                  onClick={() => this.setState({open: !active ? skill : {} })}
                  className={skill.slug}>
                  <a className={active ? 'active' : ''}>
                    <i className={skill.icon}/>{skill.name}
                  </a>
                </li>
              )
            })
          }
        </ul>

        <div className="outlet">
          {
            this.state.open && this.state.open.component
          }
        </div>
      </div>
    );
  }
}