import React from "react";
import { connect } from "react-redux";

const Item = props => {
  const { selectedPokemon } = props;

  console.log('selectedPokemon', props.pokemon)

  if (!selectedPokemon) return <div>Loading...</div>

    const loaded = (
      <div className="flex">
        <div>
          <img className="img" src={selectedPokemon.imageUrl} />
        </div>
        <div>
          <h4>{selectedPokemon.name}</h4>
          <p>
            Price: {selectedPokemon.price}{" "}
            <img className="currency img-fluid" src="/PokeBallCurrency.png" />
          </p>
        </div>
      </div>
    );


  return selectedPokemon ? loaded : <div>Loading...</div>;
};

const mapState = (state, props) => {
  return {
    pokemon: state.pokemon,
    selectedPokemon: state.pokemon.find(
      pokemon => pokemon.id === props.pokemonId
    )
  };
};

export default connect(mapState)(Item);
