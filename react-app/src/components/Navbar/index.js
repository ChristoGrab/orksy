import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import ProfileButton from './ProfileButton';
import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';
import { getMyStoreThunk } from '../../store/stores';
import "./Navbar.css";

const NavBar = () => {
  
  const sessionUser = useSelector(state => state.session.user)
  
  let sessionLinks;
    
  if (sessionUser) {
    sessionLinks = (
      <div className='navbar-right'>
        {sessionUser.store_id && 
        <Link to={`/store/${sessionUser.store_id}`} id="navbar-store-link">Store Manager</Link>}
        <ProfileButton user={sessionUser} />
        <ShoppingCart />
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
      <SearchBar />
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
