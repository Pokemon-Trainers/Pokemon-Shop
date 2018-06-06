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
      filteredPokemon: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPokemon();
  }

  handleSearchChange (event) {
    this.setState({
      filteredPokemon: this.props.pokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) // Have a seperate function for filter filter(searchTerm)
    })
    if(this.props.location.pathname !== '/pokemon') {
      this.props.history.push('/pokemon')
    }
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
