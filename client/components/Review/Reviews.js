import React from 'react';
import Review from './Review';
import AddReview from './AddReview';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleAddReview: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFinishedReview = this.handleFinishedReview.bind(this);
  }

  handleToggle() {
    if (this.state.toggleAddReview === true) {
      this.setState({
        toggleAddReview: false,
      });
    } else {
      this.setState({
        toggleAddReview: true,
      });
    }
  }

  handleFinishedReview() {
    this.setState({
      toggleAddReview: false,
    });
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        <h2>Reviews</h2>
        {reviews.length ? (
          reviews.map(review => (
            <Review key={review.id} review={review} reviews={reviews} />
          ))
        ) : (
          <p>There are no reviews...</p>
        )}
        <br />
        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleToggle}
        >
          Submit a Review
        </button>

        {this.state.toggleAddReview && (
          <AddReview
            pokemon={this.props.selectedPokemon}
            handleFinishedReview={this.handleFinishedReview}
          />
        )}
      </div>
    );
  }
}

export default Reviews;
