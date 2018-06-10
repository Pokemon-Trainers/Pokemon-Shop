import React from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router-dom';

import Reviews from './Review/Reviews';

const IndividualPokemon = props => {
  const pokemon = props.selectedPokemon || {};
  const { reviews, avg } = props;

  const loading = <p>This page is either loading or not available...</p>;

  const loaded = (
    <div className="mb-5">
      <div className="row">
        <div className="col">
          <img src={pokemon.imageUrl} />
        </div>
        <div className="col">
          <h1>{pokemon.name}</h1>
          <ReactStars
            count={5}
            value={Number(avg)}
            size={24}
            edit={false}
            color2="#ffd700"
          />
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
        <Reviews selectedPokemon={pokemon} reviews={reviews} />
      </div>
    </div>
  );
  return <div className="container mb-5">{pokemon.id ? loaded : loading}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const reviews = state.reviews.filter(review => review.pokemonId === id) || [];

  const avg =
    reviews.length &&
    reviews
      .map(review => Number(review.rating))
      .reduce((accumulator, currentValue) => accumulator + currentValue) /
      reviews.length;

  return {
    selectedPokemon: state.pokemon.find(pokemon => pokemon.id === id),
    reviews,
    avg,
  };
};

export default withRouter(connect(mapStateToProps)(IndividualPokemon));
