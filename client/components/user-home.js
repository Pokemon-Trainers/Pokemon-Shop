import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Reviews from "./UserHome/Reviews";
import Orders from "./UserHome/Orders";

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "orders"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      view: event.target.name
    });
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="container">
          <h3>Welcome, {user.email}!</h3>
          <div className="flex margin-bottom">
            <button
              className="btn btn-info"
              type="button"
              name="orders"
              onClick={this.handleClick}
            >
              Orders
            </button>
            <button
              className="btn btn-info"
              type="button"
              name="reviews"
              onClick={this.handleClick}
            >
              Reviews
            </button>
          </div>

          {this.state.view === "orders" ? <Orders /> : <Reviews />}
        </div>
      </div>
    );
  }
}

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
