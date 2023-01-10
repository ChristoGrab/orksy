import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../../../store/reviews";
import ReviewStars from "../ReviewStars";

const UpdateReviewModal = ( {reviewId, prevRating, prevReview} ) => {
  
  const dispatch = useDispatch()
  const reload = () => window.location.reload();
  
  const [rating, setRating] = useState(prevRating)
  const [review, setReview] = useState(prevReview)
  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors([])
    
    const errorList = []
    if (rating < 1) errorList.push("Don't forget ta leave a rating by clickin' on da shiny starz")
    if (!review.length) errorList.push("Don't be a naff leaving an empty review")
    setErrors(errorList)
    
    if (errorList.length) return
    
    setSubmitted(true)
    
    const newReview = {
      rating,
      review
    }

    dispatch(updateReviewThunk(newReview, reviewId))
    .then(reload())
  }

  return (
    <>
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
        className="review-textarea"
        type="text"
        value={review}
        onChange={e => setReview(e.target.value)}
        />
        <button className= "auth-submit-button green" onClick={handleSubmit}>Submit Review</button>
      </form>
          {submitted === true && (
            <div className="loading-popup-container">
              <div className="loading-popup-text">Yer request is in da workz, waitin' on da gretchins to finish da job</div>
              <div className="loading-wheel-container"><i className="fa-solid fa-spinner"></i></div>
            </div>
          )}
          </>
  )
}

export default UpdateReviewModal;
