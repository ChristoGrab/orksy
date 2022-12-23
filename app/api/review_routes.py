from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint("reviews", __name__)

# GET ALL REVIEWS FOR A PRODUCT
@review_routes.route("/product/<int:id>")
def product_reviews(id):
  """
  Query for all reviews from a specific product
  """
  reviews = Review.query.filter(Review.product_id == id).all()
  return {"Reviews": [review.to_dict() for review in reviews]}
  
# GET ALL REVIEWS FOR CURRENT USER
@review_routes.route('/user')
def user_reviews():
  """
  Query for all reviews associated with user at id
  """
  user_reviews = Review.query.filter(Review.reviewer_id == current_user.id).all()
  
  if len(user_reviews) == 0:
    return {"message": "You 'aven't reviewed any produktz yet"}
  
  return {"Reviews": [review.user_reviews_to_dict() for review in user_reviews]}, 200

# UPDATE A REVIEW
@review_routes.route('/<int:id>', methods=["PUT"])
def update_review(id):
  """
  Edit an existing review
  """
  review = Review.query.get(id)
  
  if not review:
    return {"message": "This review does not exist"}, 404
  
  if current_user.id != review.reviewer_id:
    return {"message": "You cannot edit reviews that do not belong to you"}, 403

  if review:
    review.rating = request.json["rating"]
    review.review = request.json["review"]
    db.session.commit()
    return review.to_dict()
    
# DELETE A REVIEW
@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
  """
  Delete an existing review
  """
  
  review = Review.query.get(id)
  
  if not review:
    return {"message": "This review does not exist"}, 404

  if current_user.id != review.reviewer_id:
    return {"message": "You cannot delete reviews that do not belong to you"}, 403


  if review:
    db.session.delete(review)
    db.session.commit()
    return {"message": "deletion successful"}, 200
