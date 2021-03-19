import React, { Component } from 'react';
import NavBar from './../views/NavBar';
import { randomBeer } from './../services/ironbeers-api';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: null,
    };
  }

  componentDidMount() {
    this.loadBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadBeer();
    }
  }

  loadBeer = async () => {
    const id = this.props.match.params.id;
    const beer = await randomBeer(id);
    this.setState({
      single: beer,
    });
  };

  render() {
    const sin = this.state.single;
    return (
      <React.Fragment>
        <NavBar></NavBar>

        {sin && (
          <div className="singleBeer">
            <img src={sin.image_url} alt={sin.name} />
            <h2>{sin.name}</h2>
            <h4>{sin.tagline}</h4>
            <div className="technicalDetails">
              <small>
                <b>First brewed:</b> {sin.first_brewed},{' '}
                <b>Attenuation level:</b> {sin.attenuation_level},<br />{' '}
                <b>Created by: </b>
                {sin.contributed_by}
              </small>
            </div>
            <p>{sin.description}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default RandomBeer;
