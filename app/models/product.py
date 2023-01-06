from .db import db, environment, SCHEMA, add_prefix_for_prod

class Product(db.Model):
  __tablename__ = "products"
  
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
  
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  description = db.Column(db.Text, nullable=False)
  price = db.Column(db.Integer, nullable=False)
  store_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("stores.id")))
  image = db.Column(db.String)

  # Relationships
  store = db.relationship("Store", back_populates="products")
  reviews = db.relationship("Review", back_populates="product", cascade="delete")
  order_items = db.relationship("OrderItem", back_populates="product", cascade="delete")

  def average_rating(self):
    if len(self.reviews) > 0:
      average = sum(review.rating for review in self.reviews) / len(self.reviews)
      return round(average, 2)
    else:
      return 0
  
  def to_dict(self, store=False):
    product = {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'price': self.price,
      'store_id': self.store_id,
      'image': self.image,
      'average_rating': self.average_rating()
    }
    if store:
      product["store"] = self.store.to_dict()
      
    return product
