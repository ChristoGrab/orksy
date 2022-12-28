import { useState } from "react"
import { Modal } from "../../context/Modal"
import UpdateReviewModal from "./ProductReviews/UpdateReviewModal"
import DeleteReviewModal from "./ProductReviews/DeleteReviewModal"
import "./Reviews.css"

const ReviewCard = ({ review, sessionUser }) => {
  
  // State variables for opening and closing review modals
  const [updateReviewModal, setUpdateReviewModal] = useState(false)
  const [deleteReviewModal, setDeleteReviewModal] = useState(false)
  
  // onClick functions for modals
  const showUpdateReviewForm = async (e) => {
    e.preventDefault();

    return setUpdateReviewModal(true)
  }

  const confirmDelete = async (e) => {
    e.preventDefault();

    return setDeleteReviewModal(true)
  }
  
  return (
    <div>
      <div>
        {[...Array(review?.rating)].map((star) => (<i className="fa-solid fa-star"></i>))}
      </div>
      <div>{review.review}</div>
      <div className="reviewer-name">{review.reviewer_name}</div>
      {
        sessionUser && sessionUser.id === review.reviewer_id && (
          <div className="review-crud-box">
            <i className="fa-regular fa-pen-to-square hover-cursor" onClick={showUpdateReviewForm} />
            <i className="fa-regular fa-trash-can hover-cursor" onClick={confirmDelete} />
          </div>
        )
      }

      {
        updateReviewModal === true && (
          <Modal onClose={() => setUpdateReviewModal(false)}>
            <UpdateReviewModal 
            setUpdateReviewModal={setUpdateReviewModal} 
            reviewId={review.id} 
            prevRating={review.rating} 
            prevReview={review.review} />
          </Modal>
        )
      }

      {
        deleteReviewModal === true && (
          <Modal onClose={() => setDeleteReviewModal(false)}>
            <DeleteReviewModal 
            setReviewModal={setDeleteReviewModal} 
            reviewId={review.id} />
          </Modal>
        )
      }
    </div>
  )

}

export default ReviewCard;
