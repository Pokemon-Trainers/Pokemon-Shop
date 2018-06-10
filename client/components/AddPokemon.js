import React, { Component } from "react";
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
          <select value={this.state.type} onChange={this.handleChange}>
            {this.props.pokemon.map(poke => (
              <option value={poke.type}>{poke.type}</option>
            ))}
          </select>
          {/* <input
            type="radio"
            onChange={this.handleChange}
            value={this.state.type}
            name="type"
          /> */}
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

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokemon => dispatch(postPokemon(pokemon))
  };
};

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPokemon);
