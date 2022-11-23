import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LogoutButton from './LogoutButton'
import './ProfileButton.css'

function ProfileButton({ user }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button id="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" id='profile-pic' />
        <i className="fa-solid fa-caret-down"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="profile-dropdown-link">
            <div id="profile-dropdown-user-box">
            <div id="profile-dropdown-username">{user.username}</div>
            <Link to='/user/profile' className="manage-account-link">Manage Profile</Link>
            </div>
          </div>
          <div className="profile-dropdown-link">
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
