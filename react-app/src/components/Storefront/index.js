import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as storeActions from "../../store/stores"
import "./Storefront.css"

const StoreFront = () => {

  const dispatch = useDispatch();
  const { storeId } = useParams();

  useEffect(() => {

    dispatch(storeActions.getStoreThunk(storeId))
  }, [dispatch])

  const store = useSelector(state => state.stores.singleStore);

  return (
    <div className="storefront-container">
      <div className="storefront-bannerimage">
        <img src={store.banner_image}></img>
        <div className="storefront-info-box">
          <div className="storefront-info-name">
          {store.name}
          </div>
          <div className="storefront-info-description">
          {store.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreFront;
