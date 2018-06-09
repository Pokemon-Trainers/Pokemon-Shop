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

  static getDerivedStateFromProps(props, state) {
    console.log("props inside static", props);
    props.pokemon.forEach(poke => {
      if (poke.id === props.cart.itemId) {
        return {
          ...state,
          totalPrice: props.cart.qty
        };
      }
    });
  }

  static getPokemonPrice(id) {
    const foundId = props.cart.find(item => {
      item.itemId === id;
    });

    return foundId;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Cart</h1>
          </div>
          {this.props.cart.length ? (
            this.props.cart.map(item => (
              <div key={item.itemId}>
                {this.props.pokemon.map(poke => (
                  <div key={poke.id}>
                    {poke.id === item.itemId && item.qty > 0 ? (
                      <div>
                        <CartItem item={item} poke={poke} />
                        <div className="col-12">
                          Total Value: {this.state.totalPrice}
                        </div>
                        <button>Proceed to Checkout</button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="col-12">
              <h3>No Items In cart</h3>
            </div>
          )}
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
