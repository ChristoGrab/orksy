from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Cart, db, Product

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/current')
@login_required
def get_my_cart():
  """
  Route for user to view items currently in their cart
  """
  user_id = current_user.id
  cart = Cart.query.filter(Cart.user_id == user_id).filter(Cart.order_id == 0).all()
  
  return {
    "Carts": [item.to_dict() for item in cart]
  }, 200

