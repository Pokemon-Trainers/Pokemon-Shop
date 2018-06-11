import React from "react";
import { connect } from "react-redux";
import { changePokemon } from "../store/pokemon";

class EditPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      type: [],
      description: "",
      imageUrl: "",
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
    state.name = props.selectedPokemon.name;
    state.type = props.selectedPokemon.type;
    state.description = props.selectedPokemon.description;
    state.imageUrl = props.selectedPokemon.imageUrl;
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
    console.log("props inside handle submit", this.props);
    evt.preventDefault();
    this.props.postPokemon({
      ...this.state
    });
  }

  render() {
    console.log("this.state!", this.props.pokemon);
    return (
      <div>
        <h1>Edit POKEMON</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <p>type</p>
          <select
            multiple
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            {this.getTypes().map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
            {/* {this.props.pokemon.map(poke => (
              <option key={poke.id} value={JSON.stringify(poke.type)}>
                {poke.type.join(", ")}
              </option>
            ))} */}
          </select>
          <p>Description</p>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
          />
          <p>Image</p>
          <input
            onChange={this.handleChange}
            value={this.state.imageUrl}
            name="imageUrl"
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
          <button type="submit">Edit Pokemon</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPokemon);
