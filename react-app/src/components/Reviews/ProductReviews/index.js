import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewsThunk } from "../../../store/reviews"
import { Modal } from '../../../context/Modal'
import ReviewModal from "./ReviewModal"
import './ProductReviews.css'

const ProductReviews = ({ productId }) => {

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const reviews = useSelector(state => Object.values(state.reviews.allReviews))

  const [reviewModal, setReviewModal] = useState(false)
  
  useEffect(() => {
    dispatch(loadReviewsThunk(productId))
  }, [dispatch])
  
  
  const showReviewForm = async (e) => {
    e.preventDefault();
    
    return setReviewModal(true)
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
      
      {reviewModal === true && (
          <Modal onClose={() => setReviewModal(false)}>
            <ReviewModal setReviewModal={setReviewModal} productId={productId}/>
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
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
              </div>
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
