import React from 'react';
import {connect} from 'react-redux'

const Item = props => {
  const {selectedPokemon} = props;
  return (
    <div className="flex">
      <div>
        <img className="img" src={selectedPokemon.imageUrl}/>
      </div>
      <div>
        <h4>{selectedPokemon.name}</h4>
        <p>Price: {selectedPokemon.price} <img className="currency img-fluid" src="/PokeBallCurrency.png" /></p>
      </div>
    </div>
  )
}

const mapState = (state, props) => {
  return {
    selectedPokemon: state.pokemon.find(pokemon => pokemon.id === props.pokemonId)
  }
}

export default connect(mapState)(Item);
