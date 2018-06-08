import React from "react";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../../store/cart";

const CartItem = ({ cart, pokemon, handleMinus, handlePlus }) => {
  console.log("this is cart", handleMinus, handlePlus);
  const id = cart.itemId;
  return (
    <div className="container">
      <div className="row">
        {cart.length &&
          cart.map(item => (
            <div key={item.itemId}>
              {pokemon.map(poke => (
                <div key={poke.id}>
                  {poke.id === item.itemId && item.qty > 0 ? (
                    <div>
                      <li>{poke.name}</li>
                      <img src={poke.imageUrl} />
                      <span>Price: {poke.price}</span>
                      <li>Quantity : {item.qty}</li>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => handlePlus(item.itemId, item.qty)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleMinus(item.itemId, item.qty)}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  <h3>Total Value: {item.qty * poke.price}</h3>
                </div>
              ))}
              {/* <h3>Total Value: {pokemon[0].price}</h3> */}
            </div>
          ))}
        {/* <div>Total Value: {pokemon[0].price}</div> */}
      </div>
    </div>
  );
};

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
)(CartItem);
