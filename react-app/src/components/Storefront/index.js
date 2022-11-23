import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as storeActions from "../../store/stores"

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
          <div className="storefront-info-left">
          {store.name}
          </div>
          {store.description}
        </div>
      </div>
    </div>
  )
}

export default StoreFront;
