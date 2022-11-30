from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Product, db
from app.forms import ProductForm
from app.util.s3 import upload_file_to_s3, allowed_file, get_unique_filename

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
    return product.to_dict(store=True)
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

# DELETE PRODUCT
@product_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_product(id):
  """
  Delete the product at given id
  """
  product = Product.query.get(id)
  if product:
    db.session.delete(product)
    db.session.commit()
    return {"message": "deletion successful"}
  else:
    return {"message": "could not find the requested resource"}
    
# UPDATE PRODUCT
@product_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_product(id):
  """
  Updates the product at given id
  """
  product = Product.query.get(id)
  new_name = request.json["name"]
  new_description = request.json["description"]
  new_price = request.json["price"]
  new_image = request.json["image"]
  if product:
    product.name = new_name
    product.description = new_description
    product.price = new_price
    product.image = new_image
    db.session.commit()
    return product.to_dict()
  else:
    return {
      "message": "The requested resource could not be found"
    }, 400

# IMAGE UPLOAD TO AWS S3
@product_routes.route('/upload', methods=["POST"])
@login_required
def upload_image():
  """
  Sends an uploaded image to S3 bucket and returns the url
  """
  print(request.files)
  if "file" not in request.files:
    return {"errors": "image required"}, 400
    
  image = request.files["file"]
  
  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400
    
  image.filename = get_unique_filename(image.filename)
  
  upload = upload_file_to_s3(image)
  
  print("upload object in backend: ", upload)
  
  return upload
