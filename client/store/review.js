import axios from 'axios'

const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

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

const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews;
    case ADD_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}

export default reviewReducer;

