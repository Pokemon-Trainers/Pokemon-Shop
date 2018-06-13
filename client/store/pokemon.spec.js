import { expect } from 'chai';
import { fetchPokemon } from './pokemon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../history';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = { pokemon: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });
  describe('fetchPokemon', () => {
    it('eventually dispatches the GET POKEMON action', () => {
      const fakePokemon = {
        name: 'Hitmonlee',
        type: ['Fighting'],
        description:
          "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
        imageUrl:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
        level: 23,
        price: 23,
        basePokemon: true,
      };
      mockAxios.onGet('/api/pokemon').replyOnce(200, fakePokemon);
      store.dispatch(fetchPokemon()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal('GET_POKEMON');
        expect(actions[0].pokemon).to.be.deep.equal(fakePokemon);
      });
    });
  });
});
