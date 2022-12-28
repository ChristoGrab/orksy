import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateReviewThunk } from "../../../store/reviews";
import ReviewStars from "../ReviewStars";

const UpdateReviewModal = ( {reviewId, setUpdateReviewModal, prevRating, prevReview} ) => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  
  console.log(reviewId)
  
  const [rating, setRating] = useState(prevRating)
  const [review, setReview] = useState(prevReview)
  const [errors, setErrors] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors([])
    setFormSubmitted(true)
    
    const errorList = []
    if (!review.length) errorList.push("Don't be a naff leaving an empty review")
    setErrors(errorList)
    
    if (errorList.length) return
    
    const newReview = {
      rating,
      review
    }

    dispatch(updateReviewThunk(newReview, reviewId))
    .then(response => setUpdateReviewModal(false))
  }

  return (
      <form className="review-form">
        <h2>Changed yer mind about this produkt, have ye?</h2>
        {errors.map((error, ind) => (
          <div className="error-message" key={ind}>{error}</div>
        )
        )}
        <label className="auth-label" htmlFor="rating">Rating</label>
        <div className="create-hover">
          <ReviewStars stars={rating} setStars={setRating} />
        </div>
        <label className="auth-label" htmlFor="review">Review</label>
        <textarea 
        type="text"
        value={review}
        onChange={e => setReview(e.target.value)}
        />
        <button className= "auth-submit-button green" onClick={handleSubmit}>Submit Review</button>
      </form>
  )
}

export default UpdateReviewModal;
