import React, { Component } from 'react';
import NavBar from './../views/NavBar';

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>New Beer</h1>
      </div>
    );
  }
}

export default NewBeer;
