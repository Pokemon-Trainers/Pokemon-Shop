import axios from "axios";
import { getCookie, setCookie, expireCookie } from "redux-cookie";

// Action types

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const SET_CART = "SET_CART";
const GET_CART = "GET_CART";
const UPDATE_CART_ITEM_QTY = "UPDATE_CART_ITEM_QTY";

// Action creators
export const setCart = (itemId, qty) => ({
  type: SET_CART,
  itemId,
  qty
});

export const getCart = cart => ({
  type: GET_CART,
  cart
});

export const removeFromCart = itemId => ({
  type: REMOVE_FROM_CART,
  itemId
});

export const updateCartItemQty = (itemId, qty) => ({
  type: UPDATE_CART_ITEM_QTY,
  itemId,
  qty
});

const clearCart = () => ({
  type: CLEAR_CART
});
// Thunk

export const fetchCart = () => {
  return dispatch => {
    const cart = dispatch(getCookie("cart"));
    dispatch(getCart((cart && JSON.parse(cart)) || []));
  };
};

export const updateCart = (itemId, qty) => {
  return (dispatch, getState) => {
    dispatch(setCart(itemId, qty));
    dispatch(setCookie("cart", JSON.stringify(getState().cart)));
  };
};

// Reducer

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case SET_CART:
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
      return state.filter(item => item.id !== action.itemId);

    case UPDATE_CART_ITEM_QTY:
      return state.map(item => {
        return item.itemId === action.itemId
          ? { ...item, qty: action.qty }
          : { ...item };
      });

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
