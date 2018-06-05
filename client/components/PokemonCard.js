import React from 'react';

const PokemonCard = props => {
  const { pokemon } = props;
  return (
    <div >
      <div>
        <img src={pokemon.imageUrl} className="img-fluid" />
      </div>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;
