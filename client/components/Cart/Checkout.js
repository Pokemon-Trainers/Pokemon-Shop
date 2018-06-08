import React, { Component } from "react";
import { connect } from "react-redux";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Cart</h1>
          <CartItem />
        </div>
      </div>
    );
  }
}
