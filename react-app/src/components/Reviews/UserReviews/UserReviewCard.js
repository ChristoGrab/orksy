import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from '../../../context/Modal'
import UpdateReviewModal from '../ProductReviews/UpdateReviewModal'
import DeleteReviewModal from "../ProductReviews/DeleteReviewModal"

const UserReviewCard = ({ review }) => {

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
    <div className="user-review-card" key={review.id}>
      <Link to="/products/{review.Product.id}" className="user-review-card-box-1">
        <img className="review-card-image" alt={review.Product.name} src={review.Product.image} />
        <h3>{review.Product.name}</h3>
      </Link>
      <div className="user-review-card-box-2">
        <div>{[...Array(review?.rating)].map((star) => (<i className="fa-solid fa-star"></i>))}</div>
        <div>{review.review}</div>
      </div>
      <div className="user-review-buttons">
      <i className="fa-regular fa-pen-to-square hover-cursor" onClick={showUpdateReviewForm} />
      <i className="fa-regular fa-trash-can hover-cursor" onClick={confirmDelete} />
      </div>
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

export default UserReviewCard;
