import React from "react";
import Item from "./Item";

const Order = props => {
  const { order } = props;

  const pending = (
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: "33%"}}
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
      style={{ width: "66%"}}
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
      style={{ width: "100%"}}
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span>Delivered</span>
    </div>
  );

  let progress;

  if (order.status === "pending") {
    progress = pending;
  } else if (order.status === "shipped") {
    progress = shipped;
  } else {
    progress = delivered;
  }

  return (
    <div className="order">
      <div className="specs flex">
        <div>
          <p>ORDER PLACED:</p>
          <p>{order.createdAt.slice(0, 10)}</p>
        </div>
        <div>
          <p>TOTAL:</p>
          <p>
            {order.total}{" "}
            <img className="currency img-fluid" src="/PokeBallCurrency.png" />
          </p>
        </div>
        <div>
          <p>SHIP TO:</p>
          <p>{order.shippingName}</p>
        </div>
        <div>
          <p>ORDER # {order.id}</p>
          <p>Order Details</p>
        </div>
      </div>

      <div className="progress margin-bottom">
        {progress}
      </div>

      <div className="flex pokemon">
        {order.items && order.items.map((item, key) => (
          <Item key={key} pokemonId={item.pokemonId} />
        ))}
      </div>
    </div>
  );
};

export default Order;
