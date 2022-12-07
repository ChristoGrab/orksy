const LOAD_REVIEWS = "reviews/load"

const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews
  }
}

export const loadReviewsThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/product/${id}`)

  const data = await response.json();
  dispatch(loadReviews(data));
  return data;
}

const initialState = { allReviews: {} }

// Reviews Reducer //

const reviewsReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_REVIEWS: {
      const productReviews = {};
      action.reviews.Reviews.forEach(review => {
        productReviews[review.id] = review;
      })

      return {
        ...state,
        allReviews: productReviews
      }
    }

    default:
      return state;
  }
}

export default reviewsReducer;
