from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class Order(db.Model):
  __tablename__ = "orders"
  
  if environment == "production":
    __table_args__ = {"schema": SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
  total = db.Column(db.Integer, nullable=False)
  timestamp = db.Column(db.DateTime, default=datetime.datetime.now)
  
  # Relationships
  order_items = db.relationship("OrderItem", back_populates="order")
  user = db.relationship("User", back_populates="orders")
  
  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "total": self.total,
      "items": [item.to_dict() for item in self.order_items],
      "timestamp": self.timestamp
    }
