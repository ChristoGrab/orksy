from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Store, db
from app.forms import StoreForm

store_routes = Blueprint('stores', __name__)

# GET ALL STORES
@store_routes.route('/')
def all_stores():
  """
  Query for all stores and returns them in a list of dictionaries
  """
  stores = Store.query.all()
  return {'stores': [store.to_dict() for store in stores]}

# GET ONE STORE
@store_routes.route('/<int:id>')
def store(id):
    """
    Query for a store by id and returns that store in a dictionary
    """
    store = Store.query.get(id)
    if store:
      return store.to_dict()
    else:
      return {"error": "This store does not exist"}

# CREATE A STORE
@store_routes.route('/new', methods=["POST"])
@login_required
def create_store():
  """
  Create a new store
  """
  form = StoreForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  
  if form.validate_on_submit():
    new_store = Store(
      name = form.data["name"],
      description = form.data["description"],
      owner_id = form.data["owner_id"],
      banner_image = form.data["banner_image"]
    )
    db.session.add(new_store)
    db.session.commit()
    
    return new_store.to_dict()
  else:
    return form.errors

# UPDATE A STORE
@store_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def update_store(id):
  """
  Update the current user's store information
  """
  store = Store.query.get(id)
  new_name = request.json["name"]
  new_description = request.json["description"]
  new_banner = request.json["banner_image"]
  
  if store:
    if store.owner_id == current_user.id:
      store.name = new_name
      store.description = new_description
      store.banner_image = new_banner
      db.session.commit()
      return store.to_dict()
    else:
      return {"message": "Cannot edit a store you do not own"}
  else:
    return {"message": "Could not find the store you requested"}
