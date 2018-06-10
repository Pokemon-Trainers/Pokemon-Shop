import axios from 'axios';

const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';

const getAllReviews = reviews => {
  return {
    type: GET_ALL_REVIEWS,
    reviews,
  };
};

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

const deleteReview = reviewId => {
  return {
    type: DELETE_REVIEW,
    reviewId,
  };
};

const updateReview = review => {
  return {
    type: UPDATE_REVIEW,
    review,
  };
};

export const fetchReviews = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/review');
    dispatch(getAllReviews(data));
  };
};

export const createReview = review => {
  return async dispatch => {
    const { data } = await axios.post('/api/review', review);
    dispatch(addReview(data));
  };
};

export const removeReview = reviewId => {
  return async dispatch => {
    await axios.delete(`/api/review/${reviewId}`);
    dispatch(deleteReview(reviewId));
  };
};

export const changeReview = review => {
  return async dispatch => {
    const { data } = await axios.put(`/api/review/${review.id}`, review);
    dispatch(updateReview(review));
  };
};

const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews;
    case ADD_REVIEW:
      return [...state, action.review];
    case DELETE_REVIEW:
      return state.filter(review => review.id !== action.reviewId);
    case UPDATE_REVIEW:
      return state.map(review => {
        if (review.id === action.review.id) {
          console.log('ACTION REVIEW', action.review);
          return {
            ...review,
            title: action.review.title,
            description: action.review.description,
            rating: action.review.rating,
          };
        } else {
          return { ...review };
        }
      });
    default:
      return state;
  }
};

export default reviewReducer;
