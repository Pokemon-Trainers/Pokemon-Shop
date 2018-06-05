import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard";
import Sidebar from "./Sidebar";

class PokemonList extends Component {
  render() {
    const { pokemon } = this.props;
    if (!pokemon) {
      return <h1>NO Pokemon</h1>;
    }
    return (
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-9 d-flex justify-content-between flex-wrap">
            {pokemon.map(poke => (
              <div
                className="col-4 bg-light p-2 border border-white mb-1"
                key={poke.id}
              >
                <PokemonCard pokemon={poke} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapState)(PokemonList);
