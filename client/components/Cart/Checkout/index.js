import React from "react";
import { connect } from "react-redux";

import ShippingInfo from "./ShippingInfo";
import BillingInfo from "./BillingInfo";

import { createOrder } from "../../../store/order";
import Cart from "../index";

import Stripe from "./Stripe";
import StripeCheckout from "react-stripe-checkout";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: 'shipping',
      shippingName: "",
      shippingAddress: "",
      billingName: "",
      billingAddress: "",
      email: "",
      total: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { pokemon, cart } = props;
    let totalPrice = 0;

    if (pokemon.length > 0) {
      cart.forEach(cartItem => {
        const pokeItem = Cart.getPokeForCartItem(cartItem, pokemon);
        totalPrice += cartItem.qty * pokeItem.price;
      });
    }
    return { ...state, total: totalPrice };
  }

  handleToggle(event) {
    if (this.state.toggle === 'shipping') {
      this.setState({
        toggle: 'billing'
      });
    } else {
      this.setState({
        toggle: 'shipping',
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddress(type, address) {
    this.setState({
      [type]: address
    });
  }

  handleSubmit(event) {
    this.props.createOrder({
      shippingName: this.state.shippingName,
      shippingAddress: this.state.shippingAddress,
      billingName: this.state.billingName,
      billingAddress: this.state.billingAddress,
      email: this.state.email,
      cart: this.props.cart,
      userId: this.props.user.id,
      total: this.state.total
    });
  }

  render() {
    const shippingInfo = (
      <div className="cart">
        <h2>Shipping Info</h2>
        {this.state.toggle === 'shipping' && (
          <ShippingInfo
            handleAddress={this.handleAddress}
            handleChange={this.handleChange}
            {...this.state}
          />
        )}
      </div>
    );

    const billingInfo = (
      <div className="cart">
        <h2>Billing Information</h2>
        {this.state.toggle === 'billing' && (
          <BillingInfo
            handleAddress={this.handleAddress}
            handleChange={this.handleChange}
            {...this.state}
          />
        )}
      </div>
    );

    const shippingProgress = (
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "33%" }}
        aria-valuenow="33"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>Shipping</span>
      </div>
    );

    const billingProgress = (
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "66%" }}
        aria-valuenow="66"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>Billing</span>
      </div>
    );

    return (
      <div className="container container-body">
        <h1>Checkout</h1>
        <div className="progress margin-bottom">{this.state.toggle === 'shipping' ? shippingProgress : billingProgress}</div>

        {shippingInfo}
        {billingInfo}
        {Stripe(this.state.shippingName, this.state.email, this.state.total)}
        <br />
        <button
          type="submit"
          className="btn btn-info"
          onClick={this.handleSubmit}
        >
          Submit Order
        </button>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user,
    pokemon: state.pokemon
  };
};

const mapDispatch = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Checkout);
