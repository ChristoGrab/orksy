from flask import Blueprint
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
