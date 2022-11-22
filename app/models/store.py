from .db import db, environment, SCHEMA, add_prefix_for_prod

class Store(db.Model):
  __tablename__ = "stores"
  
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text)
  banner_image = db.Column(db.String)
  owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  # Relationships
  owner = db.relationship("User", back_populates="store")
  products = db.relationship("Product", back_populate="store")

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'banner_image': self.banner_image,
      'owner_id': self.owner_id
    }
