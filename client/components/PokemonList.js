import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard";
import Sidebar from "./Sidebar";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pokemon: []
      typeFilter: null,
      levelFilter: null,
      priceFilter: null,
      nameFilter: null,
      typeHidden: true,
      priceHidden: true
    };
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.toggleTypeHidden = this.toggleTypeHidden.bind(this);
    this.togglePriceHidden = this.togglePriceHidden.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { nameFilter: props.searchedName };
  }

  // State Setters

  handleTypeFilter(type) {
    this.resetFilters();
    this.setState({
      typeFilter: type
    });
  }
  handlePriceFilter(priceRange) {
    this.resetFilters();
    this.setState({
      priceFilter: priceRange
    });
  }

  resetFilters() {
    this.setState({
      typeFilter: null,
      levelFilter: null,
      priceFilter: null,
      nameFilter: null
    });
  }

  toggleTypeHidden() {
    this.setState({
      typeHidden: !this.state.typeHidden
    });
  }
  togglePriceHidden() {
    this.setState({
      priceHidden: !this.state.priceHidden
    });
  }

  // Filter methods

  filterType() {
    return this.props.pokemon.filter(
      poke => poke.type.indexOf(this.state.typeFilter) > -1
    );
  }
  filterLevel() {
    return this.props.pokemon.filter(
      poke => poke.type.indexOf(this.state.typeFilter) > -1
    );
  }
  filterPrice() {
    let arr = this.state.priceFilter.split(/[\s-]+/);
    return this.props.pokemon.filter(
      poke => poke.price >= Number(arr[0]) && poke.price <= Number(arr[1])
    );
  }
  filterName() {
    return this.props.pokemon.filter(
      poke =>
        poke.name
          .toLowerCase()
          .indexOf(this.props.searchedName.toLowerCase()) !== -1
    );
  }

  currentPokemon() {
    let pokemon = this.props.pokemon;
    if (this.state.typeFilter) {
      pokemon = this.filterType();
    }
    if (this.state.levelFilter) {
      pokemon = this.filterLevel();
    }
    if (this.state.priceFilter) {
      pokemon = this.filterPrice();
    }
    if (this.state.nameFilter) {
      pokemon = this.filterName();
    }
    return pokemon;
  }

  render() {
    const pokemon = this.currentPokemon();

    return (
      <div className="container">
        <div className="row">
          <Sidebar
            handleTypeFilter={this.handleTypeFilter}
            handlePriceFilter={this.handlePriceFilter}
            resetFilters={this.resetFilters}
            toggleTypeHidden={this.toggleTypeHidden}
            typeHidden={this.state.typeHidden}
            togglePriceHidden={this.togglePriceHidden}
            priceHidden={this.state.priceHidden}
          />
          {pokemon.length === 0 ? (
            <div className="col-9 col-sm-7 col-md-9 mx-auto">
              <h1>No Pokemon Found!</h1>
            </div>
          ) : (
            <div className="col-9 col-sm-7 col-md-9 mx-auto">
              <div className="row">
                {pokemon.map(poke => (
                  <div
                    className="col-12 col-sm-12 col-md-6 col-lg-4 p-1"
                    key={poke.id}
                  >
                    <PokemonCard pokemon={poke} />
                  </div>
                ))}
              </div>
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
