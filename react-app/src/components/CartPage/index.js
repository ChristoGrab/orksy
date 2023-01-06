import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItemCard from './CartItemCard'
import "./CartPage.css"

const CartPage = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")))

  }, [])

  return (
    <div className="cart-page-container">

      <div id="purchase-protection-box">
        <i className="fa-solid fa-handshake-simple" />
        <strong>Orksy purchase protekshun:</strong> Shop konfidently on Orksy knowin' if somefin' goes wrong wiv an order, you kin always use da faulty produkt to whack some skulls in.
      </div>

      {cartItems?.length
        ? <div className="cart-items-box">
          <h2>Itemz in yer kart:</h2>
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <CartItemCard key={index} index={index} product={item} />
            ))}
          </div>
          <div className="place-order-box">
            
            </div>
        </div>
        : <div className="cart-items-box">
          <h2>Your kart is empty.</h2>
          <Link id="cart-discover-link" to='/'>Discover somefin' unique ta fill it up</Link>
        </div>
      }


    </div>
  )
}

export default CartPage;