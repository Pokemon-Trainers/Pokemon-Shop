import React from "react";
import Item from './Item'

const Order = props => {
  const { order } = props;
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

<div className="progress">
  <div className="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
    <span className="sr-only">70% Complete</span>
  </div>
</div>


      <div className="flex pokemon">
      {order.orderItems.map((item, key) => <Item key={key} pokemonId={item.pokemonId}/>)}
      </div>
    </div>
  );
};

export default Order;
