# from .db import db, environment, SCHEMA, add_prefix_for_prod

# class Cart(db.Model):
#   __tablename__ = "carts"
  
#   if environment == "production":
#     __table_args__ = {"schema": SCHEMA}
    
#   id = db.Column(db.Integer, primary_key=True)
#   user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
#   order_id = db.Column(db.Integer, nullable=False)

#   # Relationships
#   user = db.relationship("User", back_populates="cart")
#   product = db.relationship("Product", back_populates="cart")
  
#   def to_dict(self):
#     return {
#       "id": self.id,
#       "user_id": self.user_id,
#       "product_id": self.product_id,
#       "order_id": self.order_id,
#       "quantity": self.quantity
#     }
