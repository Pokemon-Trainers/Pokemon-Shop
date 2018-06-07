import React from "react";
import { connect } from "react-redux";

const CartItem = ({ cart, pokemon }) => {
  console.log("this is cart", cart);
  const id = cart.itemId;
  return (
    <div className="container">
      <div className="row">
        {cart.length &&
          cart.map(item => (
            <div key={item.itemId}>
              {pokemon.map(poke => (
                <div key={poke.id}>
                  {poke.id === item.itemId ? (
                    <div>
                      <li>{poke.name}</li>
                      <img src={poke.imageUrl} />
                      <span>Price: {poke.price}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}

              <li>Quantity : {item.qty}</li>
            </div>
          ))}
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

export default connect(mapPropToCart)(CartItem);
