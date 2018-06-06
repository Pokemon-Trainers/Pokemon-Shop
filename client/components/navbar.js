import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

import Searchbar from './Searchbar';


const Navbar = ({ handleSearchChange, handleClick, isLoggedIn }) => {

  return (
  <div>
    <h1>Gotta Adopt 'Em All</h1>
    <nav>
    <Link to="/home">Home</Link>
    <Link to="/pokemon">Pokemon</Link>

      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}

      <div>
        <Searchbar handleSearchChange={handleSearchChange}/>

      </div>
    </nav>
    <hr />
  </div>
);
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
