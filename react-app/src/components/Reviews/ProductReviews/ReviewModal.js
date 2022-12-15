import { useState } from "react"

const ReviewModal = () => {
  
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const new_review = {
      rating,
      review
    }
    
    console.log(new_review)
  }
  
  return (
      <form className="review-form">
        <h2>Let da boyz know if dis produkt is up ta snuff</h2>
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
