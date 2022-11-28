from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Product, db
from app.forms import ProductForm

product_routes = Blueprint('products', __name__)

# GET ALL PRODUCTS
@product_routes.route("/")
def all_products():
  """
  Query for all products and return them as a list of dictionaries
  """
  products = Product.query.all()
  return {"Products": [product.to_dict() for product in products]}

# GET ONE PRODUCT
@product_routes.route("/<int:id>")
def one_product(id):
  """
  Query for a single product by id and return it as a dictionary
  """
  product = Product.query.get(id)
  if product:
    return product.to_dict()
  else:
    return {"error": "This product does not exist"}

# CREATE A PRODUCT
@product_routes.route('/new', methods=["POST"])
@login_required
def create_product():
  """
  Create a new product
  """
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    new_product = Product(
      name = form.data["name"],
      description = form.data["description"],
      price = form.data["price"],
      store_id = form.data["store_id"],
      image = form.data["image"]
    )
    db.session.add(new_product)
    db.session.commit()
    
    return new_product.to_dict()
  else:
    return form.errors
