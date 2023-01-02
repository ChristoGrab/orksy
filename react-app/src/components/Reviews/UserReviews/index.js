import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userReviewsThunk } from "../../../store/reviews";
import UserReviewCard from "./UserReviewCard"

const UserReviews = () => {

  const dispatch = useDispatch()
  const reviews = useSelector(state => Object.values(state.reviews.user))

  useEffect(() => {
    dispatch(userReviewsThunk())
  }, [dispatch, reviews]
  )

  return (
    <div className="user-reviews-container">
      {reviews.map(review =>
        < UserReviewCard review={review} />
      )}
    </div>
  )
}

export default UserReviews;
