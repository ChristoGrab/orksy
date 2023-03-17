import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    dispatch(logout())
    .then(history.push('/'))
  };

  return (
    <button id="logout-button" onClick={onLogout}>
      <i className="fa-solid fa-arrow-right-from-bracket" />
      Sign Out
    </button>
  )
};

export default LogoutButton;
