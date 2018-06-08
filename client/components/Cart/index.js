import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../../store/cart";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Cart</h1>
          {this.props.cart.length &&
            this.props.cart.map(item => (
              <div key={item.itemId}>
                {this.props.pokemon.map(poke => (
                  <div key={poke.id}>
                    {poke.id === item.itemId && item.qty > 0 ? (
                      <div>
                        <CartItem item={item} poke={poke} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            ))}
          <div className="col-12">Total Value: {0}</div>
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

export default connect(mapPropToCart)(Cart);
