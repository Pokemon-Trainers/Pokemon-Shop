import React from "react";

const Price = props => {
  const { pokemon } = props;

  return (
    <div>
      <ul>{pokemon.map(poke => <li key={poke.price}>{poke.price}</li>)}</ul>
    </div>
  );
};

export default Price;
