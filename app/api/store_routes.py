from flask import Blueprint
from app.models import Store

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
    return store.to_dict()
