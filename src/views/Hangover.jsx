import React, { Component } from 'react';
import hangover from './../assets/hangover.gif';
import { Link } from 'react-router-dom';

class Hangover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={hangover} alt="uh-uh" />
        <p>
          <Link to="/">Take me back to the good stuff!</Link>
        </p>
      </div>
    );
  }
}

export default Hangover;
