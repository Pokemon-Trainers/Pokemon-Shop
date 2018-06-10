import axios from "axios";

// Action types
const GET_POKEMON = "GET_POKEMON";
const ADD_POKEMON = "ADD_POKEMON";

const GET_ONE_POKEMON = "GET_ONE_POKEMON";

// Action creators
const getPokemon = pokemon => ({
  type: GET_POKEMON,
  pokemon
});

export const addPokemon = pokemon => {
  return {
    type: ADD_POKEMON,
    pokemon
  };
};

// Thunk
export const fetchPokemon = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/pokemon");
    dispatch(getPokemon(data));
  };
};

export const postPokemon = pokemon => {
  return async dispatch => {
    const { data } = await axios.post("/api/pokemon", pokemon);
    dispatch(addPokemon(data));
  };
};

// Reducer
const pokemonReducer = (state = [], action) => {
  console.log("reducer addpokemon action", action.pokemon);
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    case ADD_POKEMON:
      return [...state, action.pokemon];
    default:
      return state;
  }
};

export default pokemonReducer;
