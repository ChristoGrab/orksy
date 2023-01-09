import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import CartItemCard from './CartItemCard'
import "./CartPage.css"
import { getCartThunk, emptyCartThunk } from '../../store/cart'

const CartPage = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => Object.values(state.cart.itemList))

  useEffect(() => {
    dispatch(getCartThunk())

  }, [dispatch, cartItems.length])
  
  const handleEmptyCart = (e) => {

    e.preventDefault();

    dispatch(emptyCartThunk())
  }

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
              <CartItemCard key={index} id={item.id} product={item} />
            ))}
          </div>
          {/* <div className="place-order-box">
              <button>Checkout</button>
          </div> */}
          <button onClick={handleEmptyCart}>Empty Kart</button>
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
