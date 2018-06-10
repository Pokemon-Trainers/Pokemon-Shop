import axios from 'axios';

const ADD_ORDER = "ADD_ORDER"

const addOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

export const createOrder = order => {
  return async dispatch => {
    const { data } = await axios.post(`/api/order/${order.id}`, order);
    dispatch(createOrder(data));
  };
};

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.order]
    default:
      return state;
  }
}

export default orderReducer;
