import React from 'react';
import {Link} from 'react-router-dom'

const PokemonCard = props => {
  const { pokemon } = props;
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
    <div className="pokeCard p-2 m-1">
      <div className="text-center">
        <h2>{pokemon.name}</h2>
      </div>
      <div>
        <img src={pokemon.imageUrl} className="img-fluid p-3 mb-3 poke" />
      </div>
      <div className="row">
        <div className="col">
          <p>
            Type: <br />
            {pokemon.type.map(type => (
              <span key={type} className={`badge ${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </p>
        </div>
        <div className="col p-0">
          <p>
            Price: {pokemon.price}{' '}
            <img className="currency img-fluid" src="/PokeBallCurrency.png" />
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PokemonCard;
