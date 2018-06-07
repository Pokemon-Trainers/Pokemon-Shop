import React from 'react';
import { connect } from 'react-redux';

import Review from './Review/Reviews';

const IndividualPokemon = props => {
  const pokemon = props.selectedPokemon || {};
  const loading = <p>This page is either loading or not available...</p>;
  // const typesDelimited = pokemon.type.join(', ')
  const loaded = (
    <div className="row">
      <div className="row">
        <div className="col">
          <img src={pokemon.imageUrl} />
        </div>
        <div className="col">
          <h1>{pokemon.name}</h1>
          <p>
            Type:{' '}
            {pokemon.type &&
              pokemon.type.map(type => (
                <span key={type} className={`badge ${type.toLowerCase()}`}>
                  {type}
                </span>
              ))}
          </p>
          <p>Level: {pokemon.level}</p>
          <p>
            Price: {pokemon.price}{' '}
            <img className="currency img-fluid" src="/PokeBallCurrency.png" />
          </p>
          <p>{pokemon.description}</p>
          <div className="input-group">
            <input
              type="number"
              min="0"
              onChange={props.handleQuantityChange}
              className="form-control"
              placeholder="0"
            />
            <button
              type="button"
              className="btn btn-info"
              onClick={props.handleClick}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <Review selectedPokemon={pokemon} />
      </div>
    </div>
  );
  return <div className="container">{pokemon.id ? loaded : loading}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    selectedPokemon: state.pokemon.find(pokemon => pokemon.id === id),
  };
};

export default connect(mapStateToProps)(IndividualPokemon);
