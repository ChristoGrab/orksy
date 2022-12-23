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
    <>
      {reviews.map(review =>
        <div key={review.id}>
          {review.Product.name}
          {review.rating}
          {review.review}
        </div>
      )}
    </>
  )
}
export default UserReviews;
