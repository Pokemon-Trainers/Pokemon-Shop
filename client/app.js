import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Navbar } from "./components";
import Routes from "./routes";

import { fetchPokemon } from "./store/pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPokemon();
  }

  handleSearchChange (event) {
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search)
  }
  render() {
    return (
      <div>
        <Navbar handleSearchChange={this.handleSearchChange}/>
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
