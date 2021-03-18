import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = withRouter(() => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </nav>
  );
});

export default NavBar;
