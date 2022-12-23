import { useState } from "react"
import { Modal } from "../../context/Modal"
import UpdateReviewModal from "./ProductReviews/UpdateReviewModal"
import DeleteReviewModal from "./ProductReviews/DeleteReviewModal"

const ReviewCard = ({ review, sessionUser }) => {
  
  const [updateReviewModal, setUpdateReviewModal] = useState(false)
  const [deleteReviewModal, setDeleteReviewModal] = useState(false)
  
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
      {
        sessionUser && sessionUser.id === review.reviewer_id && (
          <div className="user-review-box">
            <i className="fa-regular fa-pen-to-square hover-cursor" onClick={showUpdateReviewForm}></i>
            <i className="fa-regular fa-trash-can hover-cursor" onClick={confirmDelete}></i>
          </div>
        )
      }

      {
        updateReviewModal === true && (
          <Modal onClose={() => setUpdateReviewModal(false)}>
            <UpdateReviewModal setUpdateReviewModal={setUpdateReviewModal} reviewId={review.id} prevRating={review.rating} prevReview={review.review} />
          </Modal>
        )
      }

      {
        deleteReviewModal === true && (
          <Modal onClose={() => setDeleteReviewModal(false)}>
            <DeleteReviewModal setReviewModal={setDeleteReviewModal} reviewId={review.id} />
          </Modal>
        )
      }
    </div>
  )

}

export default ReviewCard;
