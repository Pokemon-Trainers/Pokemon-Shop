import React from "react";
import { connect } from "react-redux";

import ShippingInfo from "./ShippingInfo";
import BillingInfo from "./BillingInfo";

import {createOrder} from '../../../store/order'
import Cart from '../index'

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleShippingInfo: true,
      toggleBillingInfo: false,
      toggleShippingOptions: false,
      shippingName: "",
      shippingAddress: "",
      billingName: "",
      billingAddress: "",
      email: "",
      total: 0
    };
    this.handleShippingInfo = this.handleShippingInfo.bind(this);
    this.handleBillingInfo = this.handleBillingInfo.bind(this);
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

  handleShippingInfo(event) {
    if (this.state.toggleShippingInfo) {
      this.setState({
        toggleShippingInfo: false
      });
    } else {
      this.setState({
        toggleShippingInfo: true,
        toggleBillingInfo: false,
        toggleShippingOptions: false
      });
    }
  }

  handleBillingInfo(event) {
    if (this.state.toggleBillingInfo) {
      this.setState({
        toggleBillingInfo: false
      });
    } else {
      this.setState({
        toggleBillingInfo: true,
        toggleShippingInfo: false,
        toggleShippingOptions: false
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
    })
  }

  render() {
    const shippingInfo = (
      <div className="cart">
        <h2 onClick={this.handleShippingInfo}>Shipping Info</h2>
        {this.state.toggleShippingInfo && (
          <ShippingInfo
            handleAddress={this.handleAddress}
            handleChange={this.handleChange}
            state={this.state}
          />
        )}
      </div>
    );

    const billingInfo = (
      <div className="cart">
        <h2 onClick={this.handleBillingInfo}>Billing Information</h2>
        {this.state.toggleBillingInfo && (
          <BillingInfo
            handleAddress={this.handleAddress}
            handleChange={this.handleChange}
            state={this.state}
          />
        )}
      </div>
    );

    const shippingOptions = (
      <div>
        <h2>Shipping Options</h2>
      </div>
    );

    return (
      <div className="container">
        <h1>Checkout</h1>
        {shippingInfo}
        {billingInfo}<br />
        <button type="submit" className="btn btn-info" onClick={this.handleSubmit}>Submit Order</button>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user,
    pokemon: state.pokemon
  }
}

const mapDispatch = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order)),
  }
}

export default connect(
  mapState,
  mapDispatch
)(Checkout);

