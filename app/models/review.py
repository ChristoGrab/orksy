from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
  __tablename__ = "reviews"
  
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer, nullable=False)
  review = db.Column(db.String(255), nullable=False)
  product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
  reviewer_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

  # Relationships
  product = db.relationship("Product", back_populates="reviews")
  reviewer = db.relationship("User", back_populates="reviews")

  # to_dict method for fetching product
  def product_review_to_dict(self):
    review = {
      "id": self.id,
      "rating": self.rating,
      "review": self.review,
      "product_id": self.product_id,
      "reviewer_id": self.reviewer_id,
      "reviewer_name": self.reviewer.username
    }

    return review;

  def user_review_to_dict(self):
    review = {
      "id": self.id,
      "rating": self.rating,
      "review": self.review,
      "Product": {
        "id": self.product.id,
        "name": self.product.name,
        "price": self.product.price,
        "store_id": self.product.store_id,
        "image": self.product.image
      }
    }

    return review;
