import axios from "axios";

// Action types

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const SET_CART = "SET_CART";

// Action creators
const setCart = (itemId, qty) => ({
  type: SET_CART,
  itemId,
  qty
});

const clearCart = () => ({
  type: CLEAR_CART
});
// Thunk

// Reducer

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART:
      return state
        .map(item => {
          if (action.itemId === item.itemId) {
            return { ...item, qty: action.qty };
          }
          return { ...item };
        })
        .filter(item => item.qty !== 0);

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
