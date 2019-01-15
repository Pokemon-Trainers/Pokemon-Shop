import { expect } from 'chai';
import { fetchReviews, createReview } from './review';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = { reviews: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe('fetchReviews', () => {
    it('eventually dispatches the GET ALL REVIEWS action', () => {
      const fakeReviews = [
        {
          rating: 2.5,
          title: 'Pick another pokemon...',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum lectus. Sed imperdiet ac libero quis mollis.',
          userId: 1,
          pokemonId: 2,
        },
      ];
      mockAxios.onGet('/api/review').replyOnce(200, fakeReviews);
      return store.dispatch(fetchReviews()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal('GET_ALL_REVIEWS');
        expect(actions[0].reviews).to.be.deep.equal(fakeReviews);
      });
    });
  });

  describe('createReview', () => {
    const fakeReview = {
      rating: 2.5,
      title: 'Pick another pokemon...',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum lectus. Sed imperdiet ac libero quis mollis.',
      userId: 1,
      pokemonId: 2,
    };

    it('createReview: eventually dispatches the ADD REVIEW action', () => {
      mockAxios.onPost('/api/review').replyOnce(200, fakeReview);
      return store.dispatch(createReview()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal('ADD_REVIEW');
        expect(actions[0].review).to.be.deep.equal(fakeReview);
      });
    });
  });
});
