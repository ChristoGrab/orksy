import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import LoginFormModal from '../auth/LoginFormModal'
import LogoutButton from '../auth/LogoutButton';
import "./Navbar.css"
import SignupFormModal from '../auth/SignupFormModal';

const NavBar = () => {
  
  const sessionUser = useSelector(state => state.session.user)
  
  let sessionLinks;
  
  if (sessionUser) {
    sessionLinks = (
      <div className='navbar-right'>
        <LogoutButton />
      </div>
    )
  } else {
    sessionLinks = (
      <div className="navbar-right">
        <LoginFormModal />
        <SignupFormModal />
      </div>
    )
  }
  
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
      <div className="navbar-logo">
        Orksy
      </div>
    </div>
    {sessionLinks}
    </nav>
  );
}

export default NavBar;
