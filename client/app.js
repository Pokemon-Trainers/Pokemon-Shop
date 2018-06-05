import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Navbar } from "./components";
import Routes from "./routes";

import { fetchPokemon } from "./store/pokemon";

class App extends Component {
  componentDidMount() {
    this.props.fetchPokemon();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPokemon: () => dispatch(fetchPokemon())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatch
  )(App)
);
