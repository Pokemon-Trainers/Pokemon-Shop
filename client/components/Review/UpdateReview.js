import React from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import ReactStars from "react-stars";

import { changeReview } from "../../store/review";

class UpdateReview extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      rating: 0,
      id: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.review.title,
      description: this.props.review.description,
      rating: this.props.review.rating,
      id: this.props.review.id
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setRating(rating) {
    this.setState({
      rating
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeReview(this.state);
  }

  render() {
    const review = this.props.review;
    return (
      <div className="review">
        <form onSubmit={this.handleSubmit}>
          <ReactStars
            count={5}
            value={Number(this.state.rating)}
            size={24}
            color2={"#ffd700"}
            onChange={this.setRating}
          />
          <br />
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            placeholder={review.title}
          />
          <p>Review by {review.user ? review.user.email : "anonymous"}</p>
          <textarea
            name="description"
            onChange={this.handleChange}
            placeholder={review.description}
          />
          <br />
          <button className="btn btn-info" type="submit">
            Update Review
          </button>
          <br />
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return ({
    reviews: state.reviews
  })
}

const mapDispatch = dispatch => {
  return ({
    changeReview: review => dispatch(changeReview(review))
  });
};

export default connect(
  mapState,
  mapDispatch
)(UpdateReview);

