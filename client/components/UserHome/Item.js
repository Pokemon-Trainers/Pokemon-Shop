import React from "react";
import { connect } from "react-redux";

const Item = props => {
  const { selectedPokemon } = props;

  if (!selectedPokemon) return <div>Loading...</div>

    const loaded = (
      <div className="media col-4 p-2">
        <div>
          <img className="align-self-center mr-3 order-img" src={selectedPokemon.imageUrl} />
        </div>
        <div className="media-body">
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
    selectedPokemon: state.pokemon.find(
      pokemon => pokemon.id === props.pokemonId
    )
  };
};

export default connect(mapState)(Item);
