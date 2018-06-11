import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/order";
import Order from "./order";

class Orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const filteredOrders = this.props.orders.filter(
      order => order.userId === this.props.userId
    );

    return (
      <div>
        <h4>Orders</h4>
        {filteredOrders.map((order, key) => <Order order={order} key={key} />)}
      </div>
    );
  }
}

const mapState = state => {
  return {
    orders: state.orders,
    userId: state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Orders);
