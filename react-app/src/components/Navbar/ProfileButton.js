import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import './ProfileButton.css'
import userAvatar from '../../assets/user-avatar.png'

function ProfileButton({ user }) {

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
          <Link to='/profile' id="profile-dropdown-link-1">
            <img src={userAvatar} alt='user-avatar' id="dropdown-avatar"></img>
            <div>
              <div id="profile-dropdown-username">{user.username}</div>
              <div id="manage-account-link">Manage Profile</div>
            </div>
          </Link>
          <div className="profile-dropdown-link">
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
