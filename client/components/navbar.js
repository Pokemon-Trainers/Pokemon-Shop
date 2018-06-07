import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

import Searchbar from './Searchbar';

const Navbar = ({ handleSearchChange, handleClick, isLoggedIn, total }) => {
  return (
    <div>
      <div className="page-header">
        <img
          className="img img-fluid"
          src="https://fontmeme.com/permalink/180606/ab7190a3c1ba8d6d6d1093d8c52c9e38.png"
        />

        <div className="method">
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
              <Link
                className="login"
                to="/login"
                style={{ backgroundColor: '#FFFFFF', border: 'none' }}
              >
                Login
              </Link>
              <Link
                className="login"
                to="/signup"
                style={{ backgroundColor: '#FFFFFF', border: 'none' }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <nav className="navbar navbar-light">
        <Link to="/home">Home</Link>
        <Link to="/pokemon">Pokemon</Link>

        <Searchbar handleSearchChange={handleSearchChange} />
        <button className="cart-button">
          <div className="nav-cart">
            <img
              className="cart-icon"
              src="http://simpleicon.com/wp-content/uploads/Shopping-Cart-10.png"
            />

            <span className="quantity-count">{total}</span>
          </div>
        </button>
      </nav>

      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
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
