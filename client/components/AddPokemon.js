import React from "react";
import { connect } from "react-redux";
import { postPokemon } from "../store/pokemon";

class AddPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      type: "",
      description: "",
      imageUrl: "",
      level: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    console.log("props inside handle submit", this.props);
    evt.preventDefault();
    this.props.postPokemon({
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      level: this.state.level,
      price: this.state.price
    });
  }

  render() {
    console.log("this.state!", this.props.pokemon);
    return (
      <div>
        <h1>ADD A POKEMON</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <p>type</p>
          <select
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            {this.props.pokemon.map(poke => (
              <option key={poke.id} value={poke.type}>
                {poke.type}
              </option>
            ))}
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
          <button type="submit">Add Pokemon</button>
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
    postPokemon: pokemon => dispatch(postPokemon(pokemon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPokemon);
