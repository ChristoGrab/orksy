import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const ProfilePage = () => {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  
  
  if (!sessionUser) return null;
  
  return (
    <div className="profile-page-container">
      <div className="profile-page-userinfo">
      {sessionUser.username}
      </div>
      <div className="profile-store-functions">
        <button>Create Yer Store</button>
        <button>Edit Yer Store</button>
        <button>Delete Yer Store</button>
      </div>
    </div>
  )
}

export default ProfilePage;
