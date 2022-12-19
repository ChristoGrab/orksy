import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../../store/reviews";

const DeleteReviewModal = ({ reviewId, setReviewModal }) => {
  
  const dispatch = useDispatch()
  
  const goBack = async (e) => {
    e.preventDefault();
    
    setReviewModal(false)
  }
  
  const deleteReview = async (e) => {
    e.preventDefault();
    
    const response = await dispatch(deleteReviewThunk(reviewId))
    
    if (response) {
    setReviewModal(false)
    }
  }
  
  return (
    <div id="delete-review-modal">
      <h2>Are ya sure, boss?</h2>
      <button className="auth-submit-button red" onClick={deleteReview}>Stomp on Review</button>
      <button className="auth-submit-button" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default DeleteReviewModal;
