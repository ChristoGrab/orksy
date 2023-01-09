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
    <>
      {reviews.length
        ? <div className="user-reviews-container">
          {reviews.map(review =>
            <UserReviewCard review={review} />
          )}
        </div>
        : <div>You have no reviews yet.</div>
      }
    </>
  );
};

export default UserReviews;
