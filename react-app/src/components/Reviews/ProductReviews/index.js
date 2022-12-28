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


  // Fetch product reviews //
  useEffect(() => {
    dispatch(loadReviewsThunk(productId))
  }, [dispatch])


  // Functions to handle opening each review modal //
  const showCreateReviewForm = async (e) => {
    e.preventDefault();

    return setCreateReviewModal(true)
  }

  return (
    <div className="product-page-reviews-container">
      {reviews.length
        ? <div className="product-reviews-number">{reviews.length} reviewz</div>
        : <div className="product-reviews-number">Dis produkt 'asn't got any reviewz yet</div>
      }

      {sessionUser && (
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
