import React from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import ReactStars from "react-stars";
import { createReview } from "../../store/review";

class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desription: "",
      rating: 0,
      pokemonId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  componentDidMount() {
    this.setState({
      pokemonId: this.props.pokemon.id
    })
  }

  setRating(rating) {
    this.setState({
      rating
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createReview(this.state);
    this.setState({
      title: "",
      desription: "",
      rating: 0,
      pokemonId: 0
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
            <tr>
              <td>Rating: </td>
              <td>
                <ReactStars count={5} size={24} color2={"#ffd700"} onClick={this.setRating}/>
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <input type="text" name="title" onChange={this.handleChange}/>
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea name="description" onChange={this.handleChange}/>
              </td>
            </tr>
            </tbody>
          </table>
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
};
export default connect(
  null,
  mapDispatch
)(AddReview);
