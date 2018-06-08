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
      this.props.removingFromCart(this.props.poke.id);
    }
    this.setState({
      qty
    });
  }
  render() {
    const { poke, removingFromCart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={poke.imageUrl} />
          </div>
          <div className="col">
            <h2>{poke.name}</h2>
          </div>
          <div className="col">
            <span>Price: {poke.price}</span>
          </div>
          <div className="col">
            <span>
              Quantity :{" "}
              <input
                name="qty"
                type="number"
                min="0"
                value={this.state.qty}
                onChange={this.handleQty}
              />
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => removingFromCart(poke.id)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
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
    removingFromCart: itemId => {
      dispatch(removeFromCart(itemId));
    }
  };
};

export default connect(
  null,
  mapDispatchToCart
)(CartItem);
