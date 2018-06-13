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
      <div className="container order">
        <div className="specs row">
          <h1>ADD A POKEMON</h1>
        </div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <h3 className="mb-4">Select From Base Pokemons</h3>
            <select
              className="form-control col-3 mb-3"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            >
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
            <p className="mb-2">Level</p>
            <input
              className="form-control col-3"
              onChange={this.handleChange}
              value={this.state.level}
              name="level"
            />
            <p className="mt-4">
              Price{" "}
              <img className="currency img-fluid" src="/PokeBallCurrency.png" />
            </p>
            <input
              className="form-control col-3"
              onChange={this.handleChange}
              value={this.state.price}
              name="price"
            />
            <button className="mt-4 btn btn-info" type="submit">
              Add Pokemon
            </button>
          </form>
        </div>
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
