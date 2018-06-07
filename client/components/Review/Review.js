import React from "react";
import { render } from "react-dom";
import ReactStars from "react-stars";

const Review = props => {
  const review = props.review;

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
      <p>Review by {review.user ? review.user.email : 'anonymous'}</p>
      <p>{review.description}</p>
    </div>
  );
};

export default Review;
