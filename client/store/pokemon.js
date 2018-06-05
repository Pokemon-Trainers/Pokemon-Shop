import axios from 'axios';

// Action types
const GET_POKEMON = 'GET_POKEMON';

// Action creators
const getPokemon = pokemon => ({
  type: GET_POKEMON,
  pokemon,
});

// Thunk
export const fetchPokemon = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/pokemon');
    console.log('pokemon', data);
    dispatch(getPokemon(data));
  };
};

// Reducer
const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      console.log('reducer pokemon', action.pokemon);
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
