from .db import db, environment, SCHEMA, add_prefix_for_prod

class Order(db.Model):
  __tablename__ = "orders"
  
  if environment == "production":
    __table_args__ = {"schema": SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
  total = db.Column(db.Integer, nullable=False)
  
  # Relationships
  order_items = db.relationship("OrderItem", back_populates="order")
  user = db.relationship("User", back_populates="orders")
