import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Navbar } from "./components";
import Routes from "./routes";

import { fetchPokemon } from "./store/pokemon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPokemon: props.pokemon || []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPokemon();
  }

  handleSearchChange (event) {
    this.setState({
      filteredPokemon: this.props.pokemon.filter(pokemon => pokemon.name.indexOf(event.target.value) !== -1)
    })
    console.log(this.state.filteredPokemon)
  }

  render() {
    return (
      <div>
        <Navbar handleSearchChange={this.handleSearchChange} />
        <Routes filteredPokemon={this.state.filteredPokemon}/>
      </div>
    );
  }
}

const mapState = state => {
  return {
    pokemon: state.pokemon
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPokemon: () => dispatch(fetchPokemon())
  };
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
);
