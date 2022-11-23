from .db import db, environment, SCHEMA, add_prefix_for_prod

class Product(db.Model):
  __tablename__ = "products"
  
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
  
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  description = db.Column(db.Text, nullable=False)
  price = db.Column(db.Float, nullable=False)
  # owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  store_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("stores.id")))
  # category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))

  # Relationships
  store = db.relationship("Store", back_populates="products")
  
  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'price': self.price,
      'owner_id': self.owner_id,
      'store_id': self.store_id,
      'category_id': self.category_id
    }
