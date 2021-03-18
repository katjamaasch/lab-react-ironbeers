import React, { Component } from 'react';
import NavBar from './../views/NavBar';
import { listBeers } from './../services/ironbeers-api';
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.loadBeerList();
  }

  loadBeerList = async () => {
    const list = await listBeers();
    this.setState({
      list,
    });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Beers</h1>
        {this.state.list.map((beer) => {
          return (
            <Link to={`/beers/${beer._id}`}>
              <div key={beer._id}>
                {beer.description ? (
                  <div key={beer._id} className="beerListItems">
                    <div className="beerListImageDiv">
                      <img src={beer.image_url} alt="beer.name" />
                    </div>
                    <div className="beerListDetailsDiv">
                      <h2> {beer.name} </h2>
                      <h4>{beer.tagline}</h4>
                      <small>
                        <b>Created by:</b> {beer.contributed_by}
                      </small>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <hr></hr>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
