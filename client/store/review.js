import axios from 'axios'

const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'
const DELETE_REVIEW = 'DELETE_REVIEW'

const getAllReviews = reviews => {
  return {
    type: GET_ALL_REVIEWS,
    reviews
  }
}

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}

const deleteReview = reviewId => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const fetchReviews = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/review');
    dispatch(getAllReviews(data));
  }
}

export const createReview = review => {
  return async dispatch => {
    const {data} = await axios.post('/api/review', review);
    dispatch(addReview(data))
  }
}

export const removeReview = reviewId => {
  return async dispatch => {
    await axios.delete(`/api/review/${reviewId}`);
    dispatch(deleteReview(reviewId))
  }
}

const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews;
    case ADD_REVIEW:
      return [...state, action.review];
    case DELETE_REVIEW:
      return state.filter(review => review.id !== action.reviewId)
    default:
      return state
  }
}

export default reviewReducer;

