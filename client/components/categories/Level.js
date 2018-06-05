import React from "react";

const Level = props => {
  const { pokemon } = props;

  return (
    <div>
      <ul>{pokemon.map(poke => <li key={poke.level}>{poke.level}</li>)}</ul>
    </div>
  );
};

export default Level;
