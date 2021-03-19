import React, { Component } from 'react';
import NavBar from './../views/NavBar';
import { createBeer } from './../services/ironbeers-api';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  /*   async componentDidUpdate() {
    // POST request using axios with async/await
    const response = await createBeer;
    this.setState({ articleId: response.data.id });
  } */

  addNewBeer = async (event) => {
    event.preventDefault();
    const newBeerData = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    const response = await createBeer(newBeerData);
    console.log('response: ', response);
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log('value, name:', value, name);
    this.setState({
      [name]: value,
    });
    console.log(this.state.attenuation_level);
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Create a new beer</h1>
        <form onSubmit={this.addNewBeer}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="">Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
          />
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label htmlFor="">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleChange}
            value={this.state.first_brewed}
          />
          <label htmlFor="">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
          />
          <label htmlFor="">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
          />
          <label htmlFor="">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleChange}
            value={this.state.contributed_by}
          />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
