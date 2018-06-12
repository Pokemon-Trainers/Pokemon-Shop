import React from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';

import { removeReview } from '../../store/review';
import UpdateReview from './UpdateReview';
class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleUpdate: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateToggle = this.handleUpdateToggle.bind(this);
  }

  handleUpdateToggle() {
    if (!this.state.toggleUpdate) {
      this.setState({
        toggleUpdate: true,
      });
    } else {
      this.setState({
        toggleUpdate: false,
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.removeReview(this.props.review.id);
  }

  render() {
    const { user, review } = this.props;
    const displayReview = (
      <div className="container-body">
        <ReactStars
          count={5}
          value={Number(review.rating)}
          size={24}
          edit={false}
          color2="#ffd700"
        />
        <h5>{review.title}</h5>
        <p>Review by {review.user ? review.user.email : 'anonymous'}</p>
        <p>{review.description}</p>
        {(user.id === review.userId || user.admin) && (
          <div>
            <button
              className="btn btn-info"
              onClick={this.handleUpdateToggle}
              type="button"
            >
              Update
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
    return (
      <div className="">
        {!this.state.toggleUpdate ? (
          displayReview
        ) : (
          <UpdateReview
            handleUpdateToggle={this.handleUpdateToggle}
            review={review}
          />
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = () => {
  return dispatch => ({
    removeReview: reviewId => dispatch(removeReview(reviewId)),
  });
};

export default connect(
  mapState,
  mapDispatch
)(Review);
