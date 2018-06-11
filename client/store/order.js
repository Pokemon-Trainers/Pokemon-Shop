import axios from 'axios';

const ADD_ORDER = "ADD_ORDER"
const GET_ORDERS = "GET_ORDERS"

const addOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const createOrder = order => {
  return async dispatch => {
    const { data } = await axios.post(`/api/order/${order.id}`, order);
    dispatch(addOrder(data));
  };
};

export const fetchOrders = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/order');
    dispatch(getOrders(data));
  }
}

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.order];
    case GET_ORDERS:
      return action.orders
    default:
      return state;
  }
}

export default orderReducer;
