import axios from "axios";

// Action types
const GET_POKEMON = "GET_POKEMON";
const GET_ONE_POKEMON = "GET_ONE_POKEMON";

// Action creators
const getPokemon = pokemon => ({
  type: GET_POKEMON,
  pokemon
});

// Thunk
export const fetchPokemon = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/pokemon");
    dispatch(getPokemon(data));
  };
};

// Reducer
const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
