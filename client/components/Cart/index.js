import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addToCart } from '../../store/cart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };
  }
  // getDerivedStateFromProps is a react function that is a new version of componentwillrecieveprops  and the static means there is no 'this'
  static getDerivedStateFromProps(props, state) {
    // We calculate the total reflecting the state
    const { pokemon, cart } = props;
    let totalPrice = 0;

    //we are going to iterate over cart item so that we can calculate to total price of all the pokemon inside the cart
    if (pokemon.length > 0) {
      cart.forEach(cartItem => {
        const pokeItem = Cart.getPokeForCartItem(cartItem, pokemon);
        totalPrice += cartItem.qty * pokeItem.price;
      });
    }
    return { ...state, totalPrice };
  }

  // helper function to get a pokemon from a cart item
  static getPokeForCartItem(cartItem, pokemon) {
    const pokeItem = pokemon.find(poke => poke.id === cartItem.itemId);
    return pokeItem;
  }

  render() {
    const filledCart = (
      <div>
        {this.props.cart.map(item => (
          <div key={item.itemId}>
            {this.props.pokemon.map(poke => (
              <div key={poke.id}>
                {poke.id === item.itemId ? (
                  <CartItem item={item} poke={poke} />
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        ))}
        <h4>
          Total: {this.state.totalPrice}{' '}
          <img className="currency img-fluid" src="/PokeBallCurrency.png" />
        </h4>
        <Link to="/checkout">
          <button className="btn btn-info">Proceed to Checkout</button>
        </Link>
      </div>
    );

    const emptyCart = (
      <div className="col-12">
        <h3>No Items In cart</h3>
      </div>
    );

    return (
      <div className="container">
            <h1>Cart</h1>
          {this.props.cart.length ? filledCart : emptyCart}
      </div>
    );
  }
}

const mapPropToCart = state => {
  return {
    cart: state.cart,
    pokemon: state.pokemon,
  };
};

export default connect(mapPropToCart)(Cart);
