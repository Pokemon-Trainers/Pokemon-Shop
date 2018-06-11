import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Review from "./Review/Review";
import { connect } from "react-redux";

import Reviews from "./UserHome/Reviews";
import Orders from "./UserHome/Orders";

class UserHome extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "orders",
      status: "all"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStatusToggle = this.handleStatusToggle.bind(this);
  }

  handleStatusToggle(event) {
    this.setState({
      status: event.target.name,
      view: 'orders'
    });
  }

  handleClick(event) {
    this.setState({
      view: event.target.name
    });
  }

  render() {
    console.log(this.state.view);
    const { user, isAdmin } = this.props;
    return (
      <div>
        <div className="container">
          <h3>Welcome, {user.email}! {isAdmin && <img src="http://i67.tinypic.com/bhx5za.png" />}</h3>

          <div className="flex margin-bottom">
            <div className="dropdown">
              <button
                className="dropdown-toggle btn btn-info"
                type="button"
                name="orders"
                onClick={this.handleClick}
                data-toggle="dropdown"
              >
                Orders <span className="caret" />
              </button>

              <ul className="dropdown-menu p-3">
                <li className="pb-2">
                  <a name="all" onClick={this.handleStatusToggle}>
                    All
                  </a>
                </li>
                <li className="pb-2">
                  <a name="pending" onClick={this.handleStatusToggle}>
                    Pending
                  </a>
                </li>
                <li className="pb-2">
                  <a name="shipped" onClick={this.handleStatusToggle}>
                    Shipped
                  </a>
                </li>
                <li className="pb-2">
                  <a name="delivered" onClick={this.handleStatusToggle}>
                    Delivered
                  </a>
                </li>
                <li className="pb-2">
                  <a name="cancelled" onClick={this.handleStatusToggle}>
                    Cancelled
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-info"
              type="button"
              name="reviews"
              onClick={this.handleClick}
            >
              Reviews
            </button>
          </div>

          {this.state.view === "orders" ? <Orders status={this.state.status}/> : <Reviews />}
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
    email: state.user.email,
    isAdmin: state.user.admin,
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
