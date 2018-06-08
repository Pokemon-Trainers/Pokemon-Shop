import React, { Component } from "react";
import CartItem2 from "./CartItem2";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../../store/cart";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  // getDerivedStateFromProps is a react function that is a new version of componentwillrecieveprops  and the static means there is no 'this'
  static getDerivedStateFromProps(props, state) {
    // We calculate the total reflecting the state
    const { pokemon, cart } = props;
    let total = 0;

    //we are going to iterate over cart item so that we can calculate to total price of all the pokemon inside the cart
    cart.forEach(cartItem => {
      const pokeItem = Cart.getPokeForCartItem(cartItem, pokemon);
      total += cartItem.qty * pokeItem.price;
    });

    state.total = total;

    return state;
  }

  static getPokeForCartItem(cartItem, pokemon) {
    const pokeItem = pokemon.find(poke => poke.id === cartItem.itemId);
    return pokeItem;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Cart</h1>
          <h3>Total Value : {this.state.total}</h3>
          {this.props.cart.map(cartItem => {
            const pokeItem = Cart.getPokeForCartItem(
              cartItem,
              this.props.pokemon
            );
            return (
              <CartItem2
                key={cartItem.itemId}
                handleMinus={this.props.handleMinus}
                handlePlus={this.props.handlePlus}
                item={pokeItem}
                qty={cartItem.qty}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapPropToCart = state => {
  return {
    cart: state.cart,
    pokemon: state.pokemon
  };
};

const mapDispatchToCart = dispatch => {
  return {
    handleMinus(itemId, qty) {
      dispatch(removeFromCart(itemId, qty));
    },
    handlePlus(itemId, qty) {
      dispatch(addToCart(itemId, qty));
    }
  };
};

export default connect(
  mapPropToCart,
  mapDispatchToCart
)(Cart);
