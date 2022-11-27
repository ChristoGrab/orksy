import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom'
import { getMyStoreThunk } from "../../store/stores";
import userAvatar from "../../assets/user-avatar.png"
import "./Profile.css"

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
        <Link id="profile-page-store-link" to={`/store/${store.id}`}>{store.name}</Link>
      </div>
    )
  } else {
    storeLinks = (
      <div className="profile-store-functions">
        <Link id="profile-page-store-link" to="/store/create">Create Yer Store</Link>
      </div>
    )
  }

  return (
    <div className="profile-page-container">
      <div className="profile-page-userinfo">
        <img id="profile-page-avatar" src={userAvatar}></img>
        <div id="profile-page-username">
          {sessionUser.username}
          {storeLinks}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
