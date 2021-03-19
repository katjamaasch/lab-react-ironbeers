import React, { Component } from 'react';
import NavBar from './../views/NavBar';
import { createBeer } from './../services/ironbeers-api';

/* name - must be type text
tagline - must be type text
description - must be type text
first_brewed - must be type text
brewers_tips - must be type text
attenuation_level - must be type number !!!
contributed_by - must be type text */

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // POST request using axios with async/await
    const response = await createBeer;
    this.setState({ articleId: response.data.id });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Create a new beer</h1>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="name" />
          <label htmlFor="">Tagline</label>
          <input type="text" placeholder="tagline" />
          <label htmlFor="">Description</label>
          <textarea placeholder="description" />
          <label htmlFor="">First Brewed</label>
          <input type="text" placeholder="first brewed" />
          <label htmlFor="">Brewers Tips</label>
          <input type="text" placeholder="brewers tips" />
          <label htmlFor="">Attenuation Level</label>
          <input type="number" placeholder="attenuation level" />
          <label htmlFor="">Contributed by</label>
          <input type="text" placeholder="contributed by" />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
