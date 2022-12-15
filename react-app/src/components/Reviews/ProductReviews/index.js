import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewsThunk } from "../../../store/reviews"
import './ProductReviews.css'

const ProductReviews = ({ productId }) => {

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const reviews = useSelector(state => Object.values(state.reviews.allReviews))

  useEffect(() => {
    dispatch(loadReviewsThunk(productId))
  }, [dispatch])

  return (
    <div className="product-page-reviews-container">
      {reviews.length
        ? <div className="product-reviews-number">{reviews.length} reviewz</div>
        : <div className="product-reviews-number">Be da first to review dis shiny produkt!</div>
      }
      {reviews.length
        ? <div>{reviews.map(review =>
          <div className="product-page-review-card" key={review.id}>
            <div>
              {[...Array(review?.rating)].map((star) => (<i className="fa-solid fa-star"></i>))}
            </div>
            <div>{review.review}</div>
            { sessionUser && sessionUser.id === review.reviewer_id && (
              <div>
                <button>Edit</button>
                <button>Delete</button>
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
