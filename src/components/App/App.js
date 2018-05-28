import React, { Component } from 'react';
import './App.css';
import { Nav } from "../Nav";

export class App extends Component {
  render() {
    return (
      <div className="tk-rooney-sans content">

        <div className="tag">
          <div className="avatar">
            <img src="/avatar.png"/>
          </div>
          <h1>Steve Pavlin</h1>
          <h2>Full-Stack Developer</h2>

          <div className="divider" />

          <Nav/>
        </div>
      </div>
    );
  }
}