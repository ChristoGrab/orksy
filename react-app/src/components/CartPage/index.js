import { Link } from 'react-router-dom'
import "./CartPage.css"

const CartPage = () => {
  return (
    <div className="cart-page-container">
      
      <div id="purchase-protection-box">
        <i className="fa-solid fa-handshake-simple" />
        <strong>Orksy purchase protekshun:</strong> Shop konfidently on Orksy knowin' if somefin' goes wrong wiv an order, you kin always use da faulty produkt to whack some skulls in.
      </div>
      
      <h2>Your kart is empty.</h2>
      <Link id="cart-discover-link" to='/'>Discover somefin' unique ta fill it up</Link>
    </div>
  )
}

export default CartPage;
