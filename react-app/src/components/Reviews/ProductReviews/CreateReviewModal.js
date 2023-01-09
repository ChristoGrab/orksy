import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../../store/reviews";
import ReviewStars from '../ReviewStars'

const CreateReviewModal = ({ productId }) => {

  const dispatch = useDispatch()
  const reload = () => window.location.reload()

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
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

    dispatch(createReviewThunk(newReview, productId))
      .then(reload())
  }

  return (
    <>
    <form className="review-form">
      <h2>Let da Orks know if dis produkt is up ta snuff</h2>
      {errors.map((error, ind) => (
        <div className="error-message" key={ind}>{error}</div>
      )
      )}
      <div className="auth-form-fields">
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
        <button className="auth-submit-button green" onClick={handleSubmit}>Submit Review</button>
      </div>
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

export default CreateReviewModal;
