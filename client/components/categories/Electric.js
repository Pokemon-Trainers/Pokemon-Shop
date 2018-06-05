import React from "react";
import { connect } from "react-redux";

const Electric = props => {
  const pokemon = props.electricPokemon || {};
  const loading = <p>This page is either loading or ergnot available...</p>;
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
    </div>
  );
  return <div>{pokemon ? loaded : loading}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const electric = ownProps.match.params.electric;
  return {
    electricPokemon: state.pokemon.filter(pokemon => pokemon.type === electric)
  };
};

export default connect(mapStateToProps)(Electric);
