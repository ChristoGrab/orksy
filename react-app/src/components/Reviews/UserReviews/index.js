import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { userReviewsThunk } from "../../../store/reviews"

const UserReviews = () => {

  const dispatch = useDispatch()
  const reviews = useSelector(state => Object.values(state.reviews.user))

  useEffect(() => {
    dispatch(userReviewsThunk())
  }, []
  )

  console.log(reviews)

  return (
    <div className="user-reviews-container">
      Your reviewz:
      {reviews.map(review =>
        <div key={review.id}>
          {review.Product.name}
          <img src={review.Product.image} />
          {review.rating}
          {review.review}
        </div>
      )}
    </div>
  )
}
export default UserReviews;
