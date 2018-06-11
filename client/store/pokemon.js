import axios from "axios";

// Action types
const GET_POKEMON = "GET_POKEMON";
const ADD_POKEMON = "ADD_POKEMON";
const UPDATE_POKEMON = "UPDATE_POKEMON";
const DELETE_POKEMON = "DELETE_POKEMON";

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

const deletePokemon = pokemonId => {
  return {
    type: DELETE_POKEMON,
    pokemonId
  };
};

const updatePokemon = pokemon => {
  return {
    type: UPDATE_POKEMON,
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

export const removePokemon = pokemonId => {
  return async dispatch => {
    await axios.delete(`/api/pokemon/${pokemonId}`);
    dispatch(deletePokemon(pokemonId));
  };
};

export const changePokemon = pokemon => {
  return async dispatch => {
    const { data } = await axios.put(`/api/pokemon/${pokemon.id}`, pokemon);
    dispatch(updatePokemon(pokemon));
  };
};

// Reducer
const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    case ADD_POKEMON:
      return [...state, action.pokemon];
    case DELETE_POKEMON:
      return state.filter(pokemon => pokemon.id !== action.pokemonId);
    case UPDATE_POKEMON:
      return state.map(pokemon => {
        if (pokemon.id === action.pokemon.id) {
          return {
            ...pokemon,
            name: action.pokemon.name,
            rating: action.pokemon.rating,
            type: action.pokemon.type,
            level: action.pokemon.level,
            price: action.pokemon.price,
            description: action.pokemon.description
          };
        } else {
          return { ...pokemon };
        }
      });
    default:
      return state;
  }
};

export default pokemonReducer;
