import React from "react";
import { connect } from "react-redux";

import Review from "./Review";
import AddReview from "./AddReview";

const Reviews = props => {
  const reviews = props.reviews;

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
      <button type="button">Submit a Review</button>

      <AddReview pokemon={props.selectedPokemon}/>
    </div>
  );
};

export default Reviews;
