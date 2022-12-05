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
  # category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))

  # Relationships
  store = db.relationship("Store", back_populates="products")
  reviews = db.relationship("Review", back_populates="product")
  
  def to_dict(self, store=False):
    product = {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'price': self.price,
      'store_id': self.store_id,
      'image': self.image
      # 'category_id': self.category_id
    }
    if store:
      product["store"] = self.store.to_dict()
    
    return product
