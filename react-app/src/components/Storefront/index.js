import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'
import * as storeActions from "../../store/stores"
import ProductCard from "../ProductCard"
import "./Storefront.css"
import orkBanner from '../../assets/red-skull.jpg'

const StoreFront = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { storeId } = useParams();

  const store = useSelector(state => state.stores.singleStore);
  const sessionUser = useSelector(state => state.session.user);

  // Dispatch for store
  useEffect(() => {
    dispatch(storeActions.getStoreThunk(storeId))
    return (() => dispatch(storeActions.clearStore()))
  }, [dispatch, storeId])


  // Redirect to delete confirmation page
  const handleDelete = async (e, id) => {
    e.preventDefault();

    history.push(`/products/${id}/delete`)
  }

  // Redirect to edit product form
  const handleEdit = async (e, id) => {
    e.preventDefault();

    history.push(`/products/${id}/edit`)
  }
  
  return (
    <div className="storefront-container">
      <div className="storefront-banner-container">
        <img id="storefront-banner" alt="an imposing orkish banner" src={orkBanner}></img>
      </div>
      
      <div className="storefront-under-banner">
      
      {sessionUser && sessionUser.id === store.owner_id && (
        <div className="storefront-owner-links">
          <Link id="edit-store-link" to={`/store/${store.id}/edit`}>Edit Yer Store</Link>
          <Link id="delete-store-link" to={`/store/${store.id}/delete`}>Delete Yer Store</Link>
        </div>
      )}
      
      <div className="storefront-info-container">
        <div className="storefront-info-name">
          {store.name}
        </div>
        <div className="storefront-info-description">
          {store.description}
        </div>
      </div>
      
      </div>
      <div className="storefront-item-container">
        <h3>All Itemz</h3>
        {sessionUser && sessionUser.id === store.owner_id && (
          <div>
            <Link id="create-product-link" className="green" to={'/products/create'}>Add a Produkt</Link>
          </div>
        )}
        <div className='storefront-item-grid'>
          {store.products?.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
              {sessionUser && sessionUser.id === store.owner_id && (
                <div className="storefront-product-buttons">
                  <button id="edit-product-button"
                    key={product.id}
                    onClick={(e) => {
                      handleEdit(e, product.id)
                    }}>
                    Edit Produkt
                  </button>
                  <button id="delete-product-button"
                    key={product.id}
                    onClick={(e) => {
                      handleDelete(e, product.id)
                    }}>
                    Delete Produkt
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoreFront;
