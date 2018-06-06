import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleSearchChange, handleClick, isLoggedIn }) => {
  return (
    <div>
      <div className="page-header">
        <img
          className="logo"
          src="https://sickr.files.wordpress.com/2013/09/pokeball.png"
        />
        <h1 className="header">Gotta Adopt 'Em All</h1>
      </div>

      <nav className="navbar navbar-light">
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
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="login" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
        <div className="nav-cart">
          <img
            className="cart-icon"
            src="http://simpleicon.com/wp-content/uploads/Shopping-Cart-10.png"
          />
          <span className="quantity-count">0</span>
        </div>
      </nav>
      <div className="row search-container">
        <form className="search">
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <hr />
    </div>
  );
};

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
    }
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
  isLoggedIn: PropTypes.bool.isRequired
};
