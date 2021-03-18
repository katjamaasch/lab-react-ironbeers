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
