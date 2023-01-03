from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Order, OrderItem, db

order_routes = Blueprint('orders', __name__)

# GET ALL USER'S ORDERS
@order_routes.route("/user")
def user_orders():
  """
  Query for all orders made by the logged-in user
  """
  orders = Order.query.filter(Order.user_id == current_user.id).all()
  if not orders:
    return {"message": "You have not made any orders yet"}
  else:
    return {"Orders": [order.to_dict() for order in orders]}, 200

# ADD AN ORDER
@order_routes.route("/new")
def new_order():
  """
  POST a new order to the user's order history
  """
  data = request.get_json()
  
  new_order = Order(
    user_id=data["user_id"],
    total=data["total"],
    items=data["items"]
  )
  
  db.session.add(new_order)
  db.session.commit()
  
  return {"message": "Your order has been processed successfully"}, 200
