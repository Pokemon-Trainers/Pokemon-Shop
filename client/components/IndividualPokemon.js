import React from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import ReactStars from "react-stars";
import {withRouter} from 'react-router-dom'

import Reviews from "./Review/Reviews";

const averageRating = reviews => {
  const ratingsTotal = reviews
    .map(review => review.rating)
    .reduce((accum, current) => accum + current);
  return ratingsTotal / reviews.length;
};

const IndividualPokemon = props => {
  const pokemon = props.selectedPokemon || {};

  )
  const filteredReviews =
    props.reviews.filter(review => review.pokemonId === pokemon.id) || [];

  console.log('filteredReviews in IndividualPokemon', filteredReviews)

  const noReviews = (
    <ReactStars count={5} value={0} size={24} edit={false} color2="#ffd700" />
  );
  const reviewsPresent = filteredReviews.length > 0 && (
    <ReactStars
      count={5}
      value={Number(averageRating(filteredReviews))}
      size={24}
      edit={false}
      color2="#ffd700"
    />
  );

  const loading = <p>This page is either loading or not available...</p>;

  const loaded = (
    <div className="row">
      <div className="row">
        <div className="col">
          <img src={pokemon.imageUrl} />
        </div>
        <div className="col">
          <h1>{pokemon.name}</h1>
          {filteredReviews.length > 0 ? reviewsPresent : noReviews}
          <p>
            Type:{" "}
            {pokemon.type &&
              pokemon.type.map(type => (
                <span key={type} className={`badge ${type.toLowerCase()}`}>
                  {type}
                </span>
              ))}
          </p>
          <p>Level: {pokemon.level}</p>
          <p>
            Price: {pokemon.price}{" "}
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
        <Reviews selectedPokemon={pokemon} filteredReviews={filteredReviews} />
      </div>
    </div>
  );
  return <div className="container">{pokemon.id ? loaded : loading}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    selectedPokemon: state.pokemon.find(pokemon => pokemon.id === id),
    reviews: state.reviews
  };
};

export default withRouter(connect(mapStateToProps)(IndividualPokemon));
