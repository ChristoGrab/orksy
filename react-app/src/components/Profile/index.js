import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import { getMyStoreThunk } from "../../store/stores";

const ProfilePage = () => {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const store = useSelector(state => state.stores.singleStore)

  const [hasStore, setHasStore] = useState(false)

  useEffect(() => {
    dispatch(getMyStoreThunk())
  }, [dispatch])
  
  if (!sessionUser) return null;
  let storeLinks;
  
  if (store && !store.error) {
    storeLinks = (
      <div className="profile-store-functions">
        {store.name}
        <button>Edit Yer Store</button>
        <button>Delete Yer Store</button>
      </div>
    )
  } else {
    storeLinks = (
      <div className="profile-store-functions">
        <Link to="/store/create">Create Yer Store</Link>
      </div>
    )
  }

  return (
    <div className="profile-page-container">
      <div className="profile-page-userinfo">
      {sessionUser.username}
      </div>
      <div className="profile-store-functions">
        { storeLinks }
      </div>
    </div>
  )
}

export default ProfilePage;
