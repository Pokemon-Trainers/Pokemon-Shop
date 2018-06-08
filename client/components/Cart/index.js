import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Cart</h1>
          <CartItem />
        </div>
        <button>Proceed to Checkout</button>
      </div>
    );
  }
}

export default Cart;
