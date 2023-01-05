import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../../store/reviews";
import ReviewStars from '../ReviewStars'

const CreateReviewModal = ({ productId, setCreateReviewModal }) => {

  const dispatch = useDispatch()
  const reload = () => window.location.reload()

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([])

    const errorList = []
    if (rating < 1) errorList.push("Don't forget ta leave a rating by clickin' on da shiny starz")
    if (!review.length) errorList.push("Don't be a naff leaving an empty review")
    setErrors(errorList)

    if (errorList.length) return

    const newReview = {
      rating,
      review
    }


    dispatch(createReviewThunk(newReview, productId))
      .then(reload())
  }

  return (
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
        {/* <select
          value={rating}
          className="auth-input"
          onChange={e => setRating(e.target.value)}
        >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select> */}
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
  )
}

export default CreateReviewModal;
