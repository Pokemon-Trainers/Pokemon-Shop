import axios from "axios";

// Action types

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";

// Action creators
export const setCart = (itemId, qty) => ({
  type: SET_CART,
  itemId,
  qty
});

export const removeFromCart = (itemId, qty) => ({
  type: REMOVE_FROM_CART,
  itemId,
  qty
});

export const addToCart = (itemId, qty) => ({
  type: ADD_TO_CART,
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
      console.log("We are setting cart", state, action);
      if (state.find(item => item.itemId === action.itemId)) {
        return state
          .map(item => {
            if (action.itemId === item.itemId) {
              return { ...item, qty: item.qty + action.qty };
            }
            return { ...item };
          })
          .filter(item => item.qty !== 0);
      } else {
        return [...state, { itemId: action.itemId, qty: action.qty }];
      }

    case REMOVE_FROM_CART:
      if (state.find(item => item.itemId === action.itemId)) {
        return state.map(item => {
          if (action.itemId === item.itemId) {
            return { ...item, qty: item.qty - 1 };
          }
          return { ...item };
        });
      }
    case ADD_TO_CART:
      if (state.find(item => item.itemId === action.itemId)) {
        return state.map(item => {
          if (action.itemId === item.itemId) {
            return { ...item, qty: item.qty + 1 };
          }
          return { ...item };
        });
      }

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
