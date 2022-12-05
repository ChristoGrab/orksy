from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint("reviews", __name__)

# GET ALL REVIEWS FOR A PRODUCT
@review_routes.route("/<int:id>")
def product_reviews(id):
  """
  Query for all reviews from a specific product
  """
  reviews = Review.query.all()
  return {"Reviews": [review.to_dict() for review in reviews]}

