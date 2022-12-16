import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../../store/reviews";

const ReviewModal = ( {productId, setReviewModal} ) => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")
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
    
    
    dispatch(createReviewThunk(newReview, productId))
    .then(response => {
        return setReviewModal(false)
      })
  }
  
  return (
      <form className="review-form">
        <h2>Let da boyz know if dis produkt is up ta snuff</h2>
        {errors.map((error, ind) => (
          <div className="error-message" key={ind}>{error}</div>
        )
        )}
        <label htmlFor="rating">Rating</label>
        <select 
        value={rating}
        onChange={e => setRating(e.target.value)}
        >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <label htmlFor="review">Review</label>
        <textarea 
        type="text"
        value={review}
        onChange={e => setReview(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Review</button>
      </form>
  )
}

export default ReviewModal;
