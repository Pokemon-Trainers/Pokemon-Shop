import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, matchPath } from 'react-router-dom';
import { Navbar } from './components';
import Routes from './routes';
import { fetchCart, updateCart } from './store/cart';

import { fetchPokemon } from './store/pokemon';
import { fetchReviews } from './store/review';
import { fetchOrders } from './store/order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filteredPokemon: []
      searchedName: '',
      quantity: '0',
      total: 0,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPokemon();
    this.props.fetchReviews();
    this.props.fetchCart();
    this.props.fetchOrders();
  }

  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      return {
        ...state,
        ...props,
      };
    }
  }

  handleSearchChange(event) {
    // this.setState({
    //   filteredPokemon: this.props.pokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    // })
    this.setState({
      searchedName: event.target.value,
    });
    if (this.props.location.pathname !== '/pokemon') {
      this.props.history.push('/pokemon');
    }
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: Number(event.target.value),
    });
  }

  handleClick(evt) {
    evt.preventDefault();
    const match = matchPath(this.props.history.location.pathname, {
      path: '/pokemon/:id',
      exact: true,
      strict: false,
    });

    let itemId = Number(match.params.id);
    let qty = Number(this.state.quantity);
    this.setState({
      total: qty + this.state.total,
    });
    this.props.addPokemontoCart(itemId, qty);
  }

  render() {
    return (
      <div>
        <Navbar
          handleSearchChange={this.handleSearchChange}
          quantity={this.state.quantity}
          total={this.state.total}
        />
        <Routes
          searchedName={this.state.searchedName}
          handleQuantityChange={this.handleQuantityChange}
          handleClick={this.handleClick}
        />
        <div className="fixed-bottom bg-dark">
          <a
            href="https://icons8.com"
            className="text-white text-sm float-right"
          >
            Icon pack by Icons8
          </a>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  let total = 0;
  state.cart.map(item => {
    total += item.qty;
    return item;
  });
  return {
    pokemon: state.pokemon,
    total,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPokemon: () => dispatch(fetchPokemon()),

    addPokemontoCart(itemId, qty) {
      dispatch(updateCart(itemId, qty));
    },

    fetchReviews: () => dispatch(fetchReviews()),

    fetchCart: () => dispatch(fetchCart()),
    
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
);
