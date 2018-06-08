import React from "react";

const CartItem2 = ({ item, qty, handleMinus, handlePlus }) => {
  return (
    <div>
      <li>{item.name}</li>
      <img src={item.imageUrl} />
      <span>Price: {item.price}</span>
      <li>Quantity : {qty}</li>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handlePlus(item.id, qty)}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleMinus(item.id, qty)}
      >
        -
      </button>
    </div>
  );
};

export default CartItem2;
