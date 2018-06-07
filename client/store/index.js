import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import pokemonReducer from './pokemon';
import cartReducer from './cart';
import reviewReducer from './review';

const reducer = combineReducers({
  user: user,
  pokemon: pokemonReducer,
  cart: cartReducer,
  reviews: reviewReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createCookieMiddleware(Cookies),
    createLogger({ collapsed: true })
  )
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
