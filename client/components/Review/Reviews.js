import React from 'react';
import { connect } from 'react-redux';

import Review from './Review';

class Reviews extends React.Component {
  render() {
    const reviews = props.reviews;


    if (filteredReviews.length === 0) {
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
        {filteredReviews.map((review, key) => (
          <Review key={key} review={review} reviews={filteredReviews} />
        ))}
      </div>
    );
  }
}

export default Reviews;
