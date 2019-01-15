import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Searchbar from './Searchbar';

const Navbar = ({ handleSearchChange, handleClick, isLoggedIn, total }) => {
  return (
    <div className="header">
      <div>
        <Searchbar handleSearchChange={handleSearchChange} />
      </div>
      <div className="logo">
        <img src="/logo.png" />
      </div>

      <div className="flex top-nav">
        <div className="top-nav-button">
          <Link to="/home">Home</Link>
        </div>
        <div className="top-nav-button">
          <Link to="/pokemon">Pokemon</Link>
        </div>

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
  );
};

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
