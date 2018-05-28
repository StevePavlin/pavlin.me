import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact</h3>
        <ul className="vanilla">
          <li>
            <i className="fas fa-envelope"/>
            <a href="mailto:steve@pavlin.me">
              steve@pavlin.me
            </a>
          </li>
          <li>
            <i className="fab fa-github"/>
            <a target="_blank" href="https://github.com/StevePavlin">
              StevePavlin
            </a>
          </li>
        </ul>
      </div>
    );
  }
}