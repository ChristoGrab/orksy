from .db import db, environment, SCHEMA, add_prefix_for_prod

class OrderItem(db.Model):
  __tablename__ = "order_items"
  
  if environment == "production":
    __table_args__ = {"schema": SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("orders.id")))
  product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
  
  # Relationships
  order = db.relationship("Order", back_populates="order_items")
