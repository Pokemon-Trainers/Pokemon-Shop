import React from "react";
import { connect } from "react-redux";

import Review from "./Review";
import AddReview from "./AddReview";

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleAddReview: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    if (this.state.toggleAddReview === true) {
      this.setState({
        toggleAddReview: false
      })
    } else {
      this.setState({
        toggleAddReview: true
      })
    }
  }

  render() {
    const reviews = this.props.reviews;

    if (reviews.length === 0) {
      return (
        <div>
          <h2>Reviews</h2>
          <hr />
          <p>There are no reviews...</p>
          <button className="btn btn-info" type="button" onClick={this.handleToggle}>Submit a Review</button>
          {this.state.toggleAddReview && <AddReview pokemon={this.props.selectedPokemon} />}
        </div>
      );
    }

    return (
      <div>
        <h2>Reviews</h2>
        {reviews.map((review, key) => (
          <Review key={key} review={review} reviews={reviews} />
        ))}<br/>
        <button type="button" className="btn btn-info" onClick={this.handleToggle}>Submit a Review</button>

        {this.state.toggleAddReview && <AddReview pokemon={this.props.selectedPokemon} />}
      </div>
    );
  }
}

export default Reviews;
