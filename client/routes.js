import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import { me } from './store';

import Cart from './components/Cart';
import PokemonList from './components/PokemonList';
import IndividualPokemon from './components/IndividualPokemon';
import AddPokemon from './components/AddPokemon';
import Checkout from './components/Cart/Checkout';
import OrderDetails from './components/UserHome/OrderDetails';
import EditPokemon from './components/EditPokemon';

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
    this.MyPokemonList = this.MyPokemonList.bind(this);
    this.IndividualPokemon = this.IndividualPokemon.bind(this);
  }
  componentDidMount() {
    this.props.loadInitialData();
  }

  MyPokemonList(props) {
    return <PokemonList searchedName={this.props.searchedName} {...props} />;
  }

  IndividualPokemon(props) {
    return (
      <IndividualPokemon
        handleClick={this.props.handleClick}
        handleQuantityChange={this.props.handleQuantityChange}
        {...props}
      />
    );
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* All Pokemon */}
        <Route exact path="/pokemon/:id" render={this.IndividualPokemon} />
        <Route path="/pokemon" render={this.MyPokemonList} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders/:id" component={OrderDetails} />

        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={UserHome} />
            {/* <Route path="/addpokemon" component={AddPokemon} /> */}
            {this.props.isAdmin ? (
              <Route path="/addpokemon" component={AddPokemon} />
            ) : (
              ''
            )}
            {this.props.isAdmin ? (
              <Route path="/editpokemon" component={EditPokemon} />
            ) : (
              ''
            )}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
