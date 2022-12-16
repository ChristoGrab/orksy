const LOAD_REVIEWS = "reviews/load"
const CREATE_REVIEW = "reviews/create"

const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews
  }
}

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
}

export const loadReviewsThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/product/${id}`)

  const data = await response.json();
  dispatch(loadReviews(data));
  return data;
}

export const createReviewThunk = (review, productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  
  if (response.ok) {
    const data = await response.json()
    console.log(data)
    dispatch(createReview(data))
    return data
  } else {
    const error = await response.json()
    return error;
  }
}

const initialState = { allReviews: {}, oneReview: {} }

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
    
    case CREATE_REVIEW: {
      const newReviewObject = {
        ...state,
        allReviews: {...state.allReviews}
      };

      newReviewObject.allReviews[action.review.id] = action.review
      return newReviewObject;

    }

    default:
      return state;
  }
}

export default reviewsReducer;
