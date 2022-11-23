from flask import Blueprint, request
from flask_login import login_required
from app.models import Store, db
from app.forms import StoreForm

store_routes = Blueprint('stores', __name__)


@store_routes.route('/')
def all_stores():
  """
  Query for all stores and returns them in a list of dictionaries
  """
  stores = Store.query.all()
  return {'stores': [store.to_dict() for store in stores]}


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
