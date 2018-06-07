import React from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import ReactStars from "react-stars";

import { removeReview } from "../../store/review";

class Review extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.removeReview(this.props.review.id);
  }

  render() {
    const user = this.props.user;
    const review = this.props.review;
    return (
      <div className="individual-review">
        <ReactStars
          count={5}
          value={Number(review.rating)}
          size={24}
          edit={false}
          color2={"#ffd700"}
        />
        <h5>{review.title}</h5>
        <p>Review by {review.user ? review.user.email : "anonymous"}</p>
        <p>{review.description}</p>

        {user.id === review.userId && (
          <form onSubmit={this.handleDelete}>
            <button type="submit">Delete</button>
          </form>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = () => {
  return dispatch => ({
    removeReview: reviewId => dispatch(removeReview(reviewId))
  });
};

export default connect(
  mapState,
  mapDispatch
)(Review);
