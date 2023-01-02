import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userReviewsThunk } from "../../../store/reviews";
import { Modal } from '../../../context/Modal'
import UpdateReviewModal from "../ProductReviews/UpdateReviewModal";
import DeleteReviewModal from "../ProductReviews/DeleteReviewModal";
import UserReviewCard from "./UserReviewCard"

const UserReviews = () => {

  const dispatch = useDispatch()
  const reviews = useSelector(state => Object.values(state.reviews.user))

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

  useEffect(() => {
    dispatch(userReviewsThunk())
  }, [dispatch]
  )

  console.log(reviews)

  return (
    <div className="user-reviews-container">
      {reviews.map(review =>
        < UserReviewCard review={review} />
      )}
    </div>
  )
}
export default UserReviews;
