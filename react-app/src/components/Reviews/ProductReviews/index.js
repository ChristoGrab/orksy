import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewsThunk } from "../../../store/reviews"
import { Modal } from '../../../context/Modal'
import ReviewModal from "./ReviewModal"
import UpdateReviewModal from "./UpdateReviewModal"
import './ProductReviews.css'

const ProductReviews = ({ productId }) => {

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const reviews = useSelector(state => Object.values(state.reviews.product))

  const [createReviewModal, setCreateReviewModal] = useState(false)
  const [updateReviewModal, setUpdateReviewModal] = useState(false)
  
  useEffect(() => {
    dispatch(loadReviewsThunk(productId))
  }, [dispatch])
  

  const showReviewForm = async (e) => {
    e.preventDefault();

    return setCreateReviewModal(true)
  }
  
  const showUpdateReviewForm = async (e) => {
    e.preventDefault();

    return setUpdateReviewModal(true)
  }

  return (
    <div className="product-page-reviews-container">
      {reviews.length
        ? <div className="product-reviews-number">{reviews.length} reviewz</div>
        : <div className="product-reviews-number">Be da first to review dis shiny produkt!</div>
      }
      {sessionUser && (
        <button className="product-page-button" onClick={showReviewForm}>Leave a Review</button>
      )}
      
      {createReviewModal === true && (
          <Modal onClose={() => setCreateReviewModal(false)}>
            <ReviewModal setReviewModal={setCreateReviewModal} productId={productId}/>
          </Modal>
        )}
        
      {reviews.length
        ? <div>{reviews.map(review =>
          <div className="product-page-review-card" key={review.id}>
            <div>
              {[...Array(review?.rating)].map((star) => (<i className="fa-solid fa-star"></i>))}
            </div>
            <div>{review.review}</div>
            { sessionUser && sessionUser.id === review.reviewer_id && (
              <div className="user-review-box">
                <i className="fa-regular fa-pen-to-square" onClick={showUpdateReviewForm}></i>
                <i className="fa-regular fa-trash-can"></i>
              </div>
            )}

            {updateReviewModal === true && (
          <Modal onClose={() => setUpdateReviewModal(false)}>
            <UpdateReviewModal setReviewModal={setUpdateReviewModal} reviewId={review.id} prevRating={review.rating} prevReview={review.review}/>
          </Modal>
        )}

          </div>
        )}
        </div>
        : <div></div>
      }
    </div>
  )
}

export default ProductReviews;
