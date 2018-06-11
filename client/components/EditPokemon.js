import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePokemon } from "../store/pokemon";

class EditPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      description: "",
      level: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.selectedPokemon) {
      return state;
    }
    state.id = props.selectedPokemon.id;
    state.description = props.selectedPokemon.description;
    state.level = props.selectedPokemon.level;
    state.price = props.selectedPokemon.price;
    return state;
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = this.state.id;
    this.props.handleToggle();

    this.props.postPokemon({
      ...this.state
    });
  }

  render() {
    console.log("history", this.props.history);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Level</p>
          <input
            onChange={this.handleChange}
            value={this.state.level}
            name="level"
          />
          <p>Price</p>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            name="price"
          />
          <p>Description</p>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
          />
          <button onClick={this.handleSubmit} type="submit">
            Edit Pokemon
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokemon => dispatch(changePokemon(pokemon))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPokemon)
);
