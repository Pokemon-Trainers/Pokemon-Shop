import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard";
import Sidebar from "./Sidebar";
// import { Pagination } from "react-bootstrap";
import { push } from "react-router-redux";
import Paginating from "./Paginating";

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
    this.changePage = this.changePage.bind(this);
    this.minusOnePage = this.minusOnePage.bind(this);
    this.plusOnePage = this.plusOnePage.bind(this);
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
  changePage(page) {
    this.props.history.push("/pokemon/?page=" + page);
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
  minusOnePage(page) {
    page = Number(page) - 1;
    return page;
  }

  plusOnePage(page) {
    if (!page) {
      page = 1;
    }
    page = Number(page) + 1;
    console.log(page);
    return page;
  }

  render() {
    const pokemon = this.currentPokemon();
    const perPage = 9;
    const pages = Math.ceil(pokemon.length / perPage);
    const startOffset = (this.props.page - 1) * perPage;
    let startCount = 0;

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
              <p>
                This page is either loading or there are no Pokemon found...
              </p>
            </div>
          ) : (
            <div className="col-9 col-sm-7 col-md-9 mx-auto">
              <div className="row">
                {pokemon.map((poke, index) => {
                  if (index >= startOffset && startCount < perPage) {
                    startCount++;
                    return (
                      <div
                        className="col-12 col-sm-12 col-md-6 col-lg-4 p-1"
                        key={poke.id}
                      >
                        <PokemonCard pokemon={poke} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
        <Paginating
          changePage={this.changePage}
          pages={pages}
          page={this.props.page}
          minusOnePage={this.minusOnePage}
          plusOnePage={this.plusOnePage}
          {...this.props}
        />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  let pageNum = ownProps.history.location.search.length - 1;
  return {
    pokemon: state.pokemon,
    page: ownProps.history.location.search[pageNum] || 1
  };
};

export default connect(mapState)(PokemonList);
