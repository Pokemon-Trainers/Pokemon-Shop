import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard";
import Sidebar from "./Sidebar";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: props.filteredPokemon || []
    };
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
  }

  componentDidMount() {
    this.setState({
      pokemon: this.props.pokemon
    });
  }

  handleTypeFilter(type) {
    this.setState({
      pokemon:
        type === "Reset Filter"
          ? this.props.pokemon
          : this.props.pokemon.filter(
              pokemon => pokemon.type.indexOf(type) > -1
            )
    });
  }
  handlePriceFilter(priceRange) {
    let arr = priceRange.split(/[\s-]+/);
    this.setState({
      pokemon:
        priceRange === "Reset Filter"
          ? this.props.pokemon
          : this.props.pokemon.filter(
              pokemon =>
                pokemon.price >= Number(arr[0]) &&
                pokemon.price <= Number(arr[1])
            )
    });
  }

  render() {
    console.log(this.props.search);
    const { pokemon } = this.state || this.props;
    return (
      <div className="container">
        <div className="row">
          <Sidebar
            handleTypeFilter={this.handleTypeFilter}
            handlePriceFilter={this.handlePriceFilter}
            pokemon={pokemon}
          />
          {/* <div className="col-9 d-flex justify-content-between flex-wrap"> */}{" "}
          {pokemon.length === 0 ? (
            <div className="col-9 d-flex justify-content-start flex-wrap">
              <h1>No Pokemon this Type!</h1>
            </div>
          ) : (
            <div className="col-9 d-flex justify-content-start flex-wrap">
              {pokemon.map(poke => (
                <div className="col-4 p-0" key={poke.id}>
                  <PokemonCard pokemon={poke} />
                </div>
              ))}
            </div>
          )}
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
