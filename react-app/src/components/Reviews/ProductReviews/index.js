import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewsThunk } from "../../../store/reviews"
import { Modal } from '../../../context/Modal'
import ReviewCard from '../index'
import CreateReviewModal from "./CreateReviewModal"
import '../Reviews.css'

const ProductReviews = ({ productId }) => {

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const reviews = useSelector(state => Object.values(state.reviews.product))

  // Modal state variables //
  const [createReviewModal, setCreateReviewModal] = useState(false)
  const [userHasReviewed, setUserHasReviewed] = useState(false)
  
    // Function to check if user has left a review
    const checkForUserReview = (reviews) => {
    
      console.log(reviews)
      if (!reviews.length) return
      reviews.forEach(review => {
        console.log(review.reviewer_id)
        if (review.reviewer_id === sessionUser.id) {
          console.log("reviewer id match")
          return setUserHasReviewed(true)
        }
      })
    }

  // Fetch product reviews //
  useEffect(() => {
    dispatch(loadReviewsThunk(productId))
  }, [dispatch, productId])
  
  useEffect(() => {
    if (sessionUser) {
      checkForUserReview(reviews)
    }
  }, [dispatch, reviews, sessionUser])


  // Function to handle review modal //
  const showCreateReviewForm = async (e) => {
    e.preventDefault();

    return setCreateReviewModal(true)
  }
  


  
  console.log("User has left review status: ", userHasReviewed)

  return (
    <div className="product-page-reviews-container">
      {reviews.length
        ? <div className="product-reviews-number">{reviews.length} reviewz</div>
        : <div className="product-reviews-number">Dis produkt 'asn't got any reviewz yet</div>
      }

      {sessionUser && !userHasReviewed && (
       <button className="product-page-button green" onClick={showCreateReviewForm}>Leave a Review</button>
      )}

      {createReviewModal === true && (
        <Modal onClose={() => setCreateReviewModal(false)}>
          <CreateReviewModal setCreateReviewModal={setCreateReviewModal} productId={productId} />
        </Modal>
      )}

      {reviews.length
        ? <div>{reviews.map(review =>
          <div className="product-page-review-card" key={review.id}>
            < ReviewCard review={review} sessionUser={sessionUser}/>
          </div>
        )}
        </div>
        : <div></div>
      }
    </div>
  )
}

export default ProductReviews;
