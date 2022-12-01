import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import LoginFormModal from '../auth/LoginFormModal'
import ProfileButton from './ProfileButton';
import "./Navbar.css"
import SignupFormModal from '../auth/SignupFormModal';

const NavBar = () => {
  
  const sessionUser = useSelector(state => state.session.user)
  
  let sessionLinks;
  
  if (sessionUser) {
    sessionLinks = (
      <div className='navbar-right'>
        <ProfileButton user={sessionUser} />
      </div>
    )
  } else {
    sessionLinks = (
      <div className="navbar-right">
        <LoginFormModal />
      </div>
    )
  }
  
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link to="/" id="navbar-logo">Orksy</Link>
    </div>
    {sessionLinks}
    </nav>
  );
}

export default NavBar;
