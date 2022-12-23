const LOAD_REVIEWS = "reviews/load"
const USER_REVIEWS = "reviews/user"
const CREATE_REVIEW = "reviews/create"
const UPDATE_REVIEW = "reviews/update"
const DELETE_REVIEW = "reviews/delete"

const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews
  }
}

const userReviews = (reviews) => {
  return {
    type: USER_REVIEWS,
    reviews
  }
}

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
}

const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

const deleteReview = (id) => {
  return {
    type: DELETE_REVIEW,
    id
  }
}

export const loadReviewsThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/product/${id}`);

  const data = await response.json();
  dispatch(loadReviews(data));
  return data;
}

export const userReviewsThunk = () => async (dispatch) => {
  const response = await fetch('/api/reviews/user');
  
  const data = await response.json();
  dispatch(userReviews(data));
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

export const updateReviewThunk = (review, reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  
  if (response.ok) {
    const data = await response.json();
    dispatch(updateReview(review))
  }
  else {
    const errorData = await response.json()
    return errorData;
  }
}

export const deleteReviewThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`, {
    method: "DELETE"
  })
  
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteReview(id))
    return data;
  }
}

const initialState = { product: {}, user: {} }

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
        product: productReviews
      }
    }
    
    case USER_REVIEWS: {
      const userReviews = {};
      action.reviews.Reviews.forEach(review => {
        userReviews[review.id] = review;
      })
      
      return {
        ...state,
        user: userReviews
      }
    }
    
    case CREATE_REVIEW: {
      const newReviewObject = {
        ...state,
        product: {...state.product}
      };

      newReviewObject.product[action.review.id] = action.review
      return newReviewObject;

    }
    
    case UPDATE_REVIEW: {
      const newReviewObject = {
        ...state,
        product: {...state.product}
      }
      
      newReviewObject.product[action.review.id] = action.review
      return newReviewObject;

    }
    
    case DELETE_REVIEW: {
      const newReviewObject = {
        ...state.product
      }
      delete newReviewObject[action.id]
      return {
        ...state,
        product: newReviewObject,
        user: {}
      }
    }

    default:
      return state;
  }
}

export default reviewsReducer;
