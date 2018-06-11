import React from 'react';
import {connect} from 'react-redux'

import Item from './Item'

const OrderDetails = props => {
  const order = props.order

  const pending = (
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: "33%" }}
      aria-valuenow="33"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span>Pending</span>
    </div>
  );

  const shipped = (
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: "66%" }}
      aria-valuenow="66"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span>Shipped</span>
    </div>
  );

  const delivered = (
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: "100%" }}
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span>Delivered</span>
    </div>
  );

  let progress;

  if (!order) return <div className="container">Loading...</div>

  if (order.status === "pending") {
    progress = pending;
  } else if (order.status === "shipped") {
    progress = shipped;
  } else {
    progress = delivered;
  }

  return (
    <div className="container">
      <h1>Order Details</h1>
      <p>Ordered on {order.createdAt.slice(0, 10)} | Order # {order.id}</p>
      <div className="order flex padding">
        <div>
          <h5>Shipping Address</h5>
          <p>{order.shippingAddress}</p>
        </div>
        <div>
          <h5>Billing Address</h5>
          <p>{order.billingAddress}</p>
        </div>
        <div>
          <h5>Payment Method</h5>
          <p>aoigaeoigjagj</p>
        </div>
        <div>
          <h5>Total</h5>
          <p>{order.total}</p>
        </div>
      </div>
      <div>
        <div className="progress margin-bottom">{progress}</div>

        <div className="flex pokemon">
          {order.items &&
            order.items.map((item, key) => (
              <Item key={key} pokemonId={item.pokemonId} />
            ))}
        </div>
      </div>


    </div>
  )
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;

  return {
    order: state.orders.find(order => order.id === id),
    pokemon: state.pokemon
  }
}

export default connect(mapState)(OrderDetails)
