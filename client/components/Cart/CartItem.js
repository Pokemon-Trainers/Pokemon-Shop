import React, { Component } from "react";
import { removeFromCart, updateCartItemQty } from "../../store/cart";
import { connect } from "react-redux";

class CartItem extends Component {
  // const id = cart.itemId;
  constructor() {
    super();
    this.state = {
      qty: ""
    };
    this.handleQty = this.handleQty.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.item.qty !== state.qty) {
      return {
        ...state,
        qty: props.item.qty
      };
    }
    return state;
  }
  handleQty(event) {
    const qty = Number(event.target.value);
    if (qty > 0) {
      this.props.updateCartItemQty(this.props.poke.id, qty);
    } else {
      this.props.removeFromCart(this.props.poke.id);
    }
    this.setState({
      qty
    });
  }
  render() {
    const { poke } = this.props;
    return (
      <div className="container">
        <div className="row">
          <li>{poke.name}</li>
          <img src={poke.imageUrl} />
          <span>Price: {poke.price}</span>
          <li>
            Quantity :{" "}
            <input
              name="qty"
              type="number"
              min="0"
              value={this.state.qty}
              onChange={this.handleQty}
            />
          </li>
          <div>Total Value: {0}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToCart = dispatch => {
  return {
    updateCartItemQty: (itemId, qty) => {
      dispatch(updateCartItemQty(itemId, qty));
    },
    removeFromCart: itemId => {
      dispatch(removeFromCart(itemId));
    }
  };
};

export default connect(
  null,
  mapDispatchToCart
)(CartItem);
