import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import homeIcon from './../assets/home.png';
import './../App.scss';

const NavBar = withRouter(() => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src={homeIcon} alt="" />
        </Link>
      </div>
    </nav>
  );
});

export default NavBar;
