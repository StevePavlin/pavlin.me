import React, { Component } from 'react';
import './Skills.css';
import { Switch, Link, Route } from 'react-router-dom';



export class Progress extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: '0%'
    }
  };

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        width: this.props.width + '%'
      })
    })
  }

  render() {

    return (
      <div className="skill-progress">
        <h3>Experience</h3>
        <div className="progress-bar">
          <div className="progress" style={{width: this.state.width }}/>
        </div>
      </div>
    );
  }
}