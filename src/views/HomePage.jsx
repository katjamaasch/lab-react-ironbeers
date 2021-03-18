import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomBeerImage from './../assets/random-beer.png';
import newBeerImage from './../assets/new-beer.png';
import allBeersImage from './../assets/beers.png';
import './../HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="sectionHeader">
          <Link to="/beers">
            <img src={allBeersImage} alt="all beers" />
            <h2 className="homepageTitle">All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              quod amet natus illum non, facilis corporis eum libero maiores
              saepe minima aliquam quisquam nisi, totam soluta. Itaque
              voluptatum quibusdam laborum?
            </p>
          </Link>
        </div>
        <div className="sectionHeader">
          <Link to="/random-beer">
            <img src={randomBeerImage} alt="all beers" />
            <h2 className="homepageTitle">Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              quod amet natus illum non, facilis corporis eum libero maiores
              saepe minima aliquam quisquam nisi, totam soluta. Itaque
              voluptatum quibusdam laborum?
            </p>
          </Link>
        </div>
        <div className="sectionHeader">
          <Link to="/new-beer">
            <img src={newBeerImage} alt="all beers" />
            <h2 className="homepageTitle">New beer in da house</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              quod amet natus illum non, facilis corporis eum libero maiores
              saepe minima aliquam quisquam nisi, totam soluta. Itaque
              voluptatum quibusdam laborum?
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
