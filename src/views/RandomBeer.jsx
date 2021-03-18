import React, { Component } from 'react';
import NavBar from './../views/NavBar';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Random Beer</h1>
      </div>
    );
  }
}

export default RandomBeer;
