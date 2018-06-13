import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

import Searchbar from './Searchbar';

const Navbar = ({ handleSearchChange, handleClick, isLoggedIn, total }) => {
  return (
    <div className="mb-4 background">
      <div className="page-header">
        <div className="logo">
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://fontmeme.com/permalink/180606/ab7190a3c1ba8d6d6d1093d8c52c9e38.png"
            />
          </div>
        </div>
        <div className="flex top-nav">
          {isLoggedIn ? (
            <div className="top-nav-button">
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div className="flex">
              {/* The navbar will show these links before you log in */}
              <div className="top-nav-button">
                <Link to="/login">Login</Link>
              </div>
              <div className="top-nav-button">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          )}
          <Link to="/cart">
            <div className="top-nav-button">
              <img
                className="cart-icon"
                src="http://simpleicon.com/wp-content/uploads/Shopping-Cart-10.png"
              />

              <span className="cart-quantity">{total}</span>
            </div>
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>

        <Searchbar handleSearchChange={handleSearchChange} />
      </nav>
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
