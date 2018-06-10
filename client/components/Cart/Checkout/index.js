import React from "react";
import { connect } from "react-redux";

import ShippingInfo from "./ShippingInfo";
import BillingInfo from "./BillingInfo";

import {createOrder} from '../../../store/order'

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
      email: ""
    };
    this.handleShippingInfo = this.handleShippingInfo.bind(this);
    this.handleBillingInfo = this.handleBillingInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('this.props.location.state.total', this.props.location.state.total);
    this.props.createOrder({
      shippingName: this.state.shippingName,
      shippingAddress: this.state.shippingAddress,
      billingName: this.state.billingName,
      billingAddress: this.state.billingAddress,
      email: this.state.email,
      cart: this.props.cart,
      userId: this.props.user.id
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
    user: state.user
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

