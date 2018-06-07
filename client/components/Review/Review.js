import React from "react";

const Review = props => {
  const review = props.review;
  return(
  <div>
    <h5>{review.title}</h5>
    <p>{review.description}</p>

  </div>
)
};

export default Review;
``
