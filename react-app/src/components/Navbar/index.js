import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import LoginFormModal from '../auth/LoginFormModal'
import LogoutButton from '../auth/LogoutButton';
import "./Navbar.css"

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
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
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
