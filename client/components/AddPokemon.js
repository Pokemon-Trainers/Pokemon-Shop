import React from "react";
import { connect } from "react-redux";
import { postPokemon } from "../store/pokemon";
import { withRouter } from "react-router-dom";

class AddPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      level: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBasePokemon() {
    const pokemon = [];

    this.props.pokemon.forEach(poke => {
      poke.name.forEach(name => {
        if (!pokemon.includes(name)) {
          pokemon.push(name);
        }
      });
    });

    return pokemon.sort();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const basePokemon = this.props.pokemon.find(
      poke => `${poke.id}` === this.state.id
    );
    this.props.postPokemon({
      name: basePokemon.name,
      type: basePokemon.type,
      description: basePokemon.description,
      imageUrl: basePokemon.imageUrl,
      level: this.state.level,
      price: this.state.price
    });
    this.setState({
      id: "",
      level: "",
      price: ""
    });
    this.props.history.push(`/pokemon`);
  }

  render() {
    return (
      <div>
        <h1>ADD A POKEMON</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Select From Base Pokemons</p>
          <select name="id" value={this.state.id} onChange={this.handleChange}>
            <option>Choose Base Pokemon</option>
            {this.props.pokemon.map(
              poke =>
                poke.basePokemon ? (
                  <option key={poke.id} value={poke.id}>
                    {poke.name}
                  </option>
                ) : null
            )}
          </select>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddPokemon)
);
