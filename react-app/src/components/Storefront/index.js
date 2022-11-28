import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import * as storeActions from "../../store/stores"
import "./Storefront.css"
import orkBanner from '../../assets/red-skull.jpg'

const StoreFront = () => {

  const dispatch = useDispatch();
  const { storeId } = useParams();

  const store = useSelector(state => state.stores.singleStore);
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {

    dispatch(storeActions.getStoreThunk(storeId))
  }, [dispatch])



  return (
    <div className="storefront-container">
      <div className="storefront-banner-container">
        <img id="storefront-banner" src={orkBanner}></img>
      </div>
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
      <div className="storefront-item-container">
        All Itemz
        <div className='storefront-item-grid'>
          <div className='storefront-item-card'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreFront;
