import React from "react";
import { connect } from "react-redux";

import Review from "./Review";

class Reviews extends React.Component {
  render() {
    const reviews = this.props.reviews;

    if (reviews.length === 0) {
      return (
        <div>
          <h2>Reviews</h2>
          <hr />
          <p>There are no reviews...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Reviews</h2>
        {reviews.map((review, key) => (
          <Review key={key} review={review} reviews={reviews} />
        ))}
      </div>
    );
  }
}

export default Reviews;
