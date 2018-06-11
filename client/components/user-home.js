import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Reviews from './UserHome/Reviews'
import Orders from './UserHome/Orders'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { user } = props;

  return (
    <div>
      <div className="container">
        <h3>Welcome, {user.email}!</h3>
        <div className="flex padding-bottom">
          <button className="btn btn-info" type="button">Orders</button>
          <button className="btn btn-info" type="button">Reviews</button>
        </div>
        <Orders />
        <Reviews />

      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    filteredReviews: state.reviews.filter(
      review => review.userId === state.user.id
    ),
    pokemon: state.pokemon
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
