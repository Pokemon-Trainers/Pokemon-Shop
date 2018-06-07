import React from "react";
import { connect } from "react-redux";

import Review from "./Review/Reviews";

const IndividualPokemon = props => {
  const pokemon = props.selectedPokemon || {};
  const loading = <p>This page is either loading or not available...</p>;
  // const typesDelimited = pokemon.type.join(', ')
  const loaded = (
    <div className="container">
      <img src={pokemon.imageUrl} />
      <h1>{pokemon.name}</h1>
      <h3>Type: </h3>
      <ul>
        {pokemon.type &&
          pokemon.type.map((type, key) => <li key={key}>{type}</li>)}
      </ul>
      <h3>Level: {pokemon.level}</h3>
      <h3>Price: {pokemon.price} Poké Balls</h3>
      <p>{pokemon.description}</p>
      <div>
        <input type="number" min="0" onChange={props.handleQuantityChange} />
        <button type="button" onClick={props.handleClick}>
          Add To Cart
        </button>
      </div>

      <Review selectedPokemon={pokemon} />
    </div>
  );
  return <div>{pokemon.id ? loaded : loading}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    selectedPokemon: state.pokemon.find(pokemon => pokemon.id === id)
  };
};

export default connect(mapStateToProps)(IndividualPokemon);
