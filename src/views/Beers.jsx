import React, { Component } from 'react';
import NavBar from './../views/NavBar';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Beers</h1>
      </div>
    );
  }
}

export default Beers;
