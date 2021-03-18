import axios from 'axios';

export const listBeers = async () => {
  try {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const body = response.data;
    return body;
  } catch {
    console.log('the api call went wrong');
  }
};

export const singleBeer = async (id) => {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    const body = response.data;
    return body;
  } catch {
    console.log('the api call for the single beer went wrong');
  }
};

export const randomBeer = async () => {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    const body = response.data;
    return body;
  } catch {
    console.log('the api call for the random beer went wrong');
  }
};
