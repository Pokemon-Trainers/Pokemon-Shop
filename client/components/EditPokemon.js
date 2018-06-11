import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePokemon } from "../store/pokemon";

class EditPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
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

    state.description = props.selectedPokemon.description;
    state.level = props.selectedPokemon.level;
    state.price = props.selectedPokemon.price;
    return state;
  }

  getTypes() {
    const types = [];

    this.props.pokemon.forEach(poke => {
      poke.type.forEach(type => {
        if (!types.includes(type)) {
          types.push(type);
        }
      });
    });

    return types.sort();
  }

  handleChange(evt) {
    if (evt.target.name === "type") {
      const selectedTypes = [...evt.target.options]
        .filter(option => option.selected)
        .map(option => option.value);

      this.setState({
        [evt.target.name]: selectedTypes
      });
    } else {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = this.state.id;
    this.props.history.push(`/pokemon/${id}`);
    this.props.handleToggle();

    this.props.postPokemon({
      ...this.state
    });
  }

  render() {
    console.log("this.state!", this.props.pokemon);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Description</p>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
          />
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
