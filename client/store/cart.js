import axios from "axios";

// Action types

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const SET_CART = "SET_CART";

// Action creators
export const setCart = (itemId, qty) => ({
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
  console.log("state on cart", state);
  switch (action.type) {
    case SET_CART:
      console.log("We are setting cart", state, action);
      if (state.find(item => item.itemId === action.itemId)) {
        return state
          .map(item => {
            if (action.itemId === item.itemId) {
              return { ...item, qty: action.qty };
            }
            return { ...item };
          })
          .filter(item => item.qty !== 0);
      } else {
        return [...state, { itemId: action.itemId, qty: action.qty }];
      }

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
