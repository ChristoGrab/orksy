import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'
import * as storeActions from "../../store/stores"
import ProductCard from "../ProductCard"
import BannerImage from "./BannerImage"
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
        {store.banner_image ? <img id="storefront-banner" alt="an imposing orkish banner" src={store.banner_image}></img>
        : <img id="storefront-no-banner" alt="an imposing orkish banner" src={orkBanner}></img>}
        {/* {sessionUser && sessionUser.id === store.owner_id && (
        <BannerImage storeId={storeId}/>
        )} */}
      </div>
      
      <div className="storefront-under-banner">
      
      {sessionUser && sessionUser.id === store.owner_id && (
        <div className="storefront-owner-links">
          <Link id="edit-store-link" className="green" to={`/store/${store.id}/edit`}>Edit Yer Store</Link>
          <Link id="delete-store-link" className="red" to={`/store/${store.id}/delete`}>Delete Yer Store</Link>
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
                  <button className="edit-product-button"
                    key={product.id}
                    onClick={(e) => {
                      handleEdit(e, product.id)
                    }}>
                    Edit
                  </button>
                  <button className="delete-product-button"
                    key={product.id}
                    onClick={(e) => {
                      handleDelete(e, product.id)
                    }}>
                    Remove
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
