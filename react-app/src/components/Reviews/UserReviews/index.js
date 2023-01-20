import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { userReviewsThunk } from "../../../store/reviews";
import UserReviewCard from "./UserReviewCard";
import "./UserReviews.css"

const UserReviews = () => {

  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.reviews.user));

  useEffect(() => {
    dispatch(userReviewsThunk());
  }, [dispatch]);

  return (
    <div className="profile-page-review-container">
      <div className="user-reviews-header">
      <h2>Your reviews</h2>
      </div>
      {reviews.length
        ? <div className="user-reviews-container">
          {reviews.map(review =>
            <UserReviewCard review={review} />
          )}
        </div>
        : <div>You have no reviews yet.</div>
      }
    </div>
  );
};

export default UserReviews;
