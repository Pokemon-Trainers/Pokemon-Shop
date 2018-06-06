import axios from "axios";

// Action types
const ADD_ITEM = "ADD_ITEM ";
const REMOVE_ITEM = "REMOVE_ITEM";
const EDIT_QTY = "EDIT_QTY";
const CHECKOUT = "CHECKOUT";

// Action creators
const addItem = (item, qty) => ({
  type: ADD_ITEM,
  item,
  qty
});

// Thunk

// Reducer

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items
      };
    default:
      return state;
  }
};

export default cartReducer;
