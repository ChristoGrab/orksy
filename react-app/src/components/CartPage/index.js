import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import CartItemCard from './CartItemCard'
import "./CartPage.css"
import { getCartThunk, emptyCartThunk } from '../../store/cart'

const CartPage = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => Object.values(state.cart.itemList))
  const [totalPrice, setTotalPrice] = useState(0)


  useEffect(() => {
    dispatch(getCartThunk())

  }, [dispatch, cartItems.length])

  // calculate total price of items in cart and set state
  useEffect(() => {
    let newTotal = calculateTotalPrice(cartItems)
    setTotalPrice(newTotal)

  }, [cartItems.length])


  const handleEmptyCart = (e) => {
    e.preventDefault();
    dispatch(emptyCartThunk())
  }

  const handleCheckout = (e) => {
    e.preventDefault();

    handleEmptyCart(e);
  }


  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price
    })
    return totalPrice;
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
          <div className="place-order-box">
            <div className="place-order-inner-box">
              <div className="place-order-cost">Item(z) Total</div>
              <i className="fa-solid fa-tooth" />
              {totalPrice}
            </div>
            <div className="place-order-inner-box">
              <div className="place-order-cost">Shipping</div> 
              <i className="fa-solid fa-tooth" />
              {Math.ceil(totalPrice / 100)}
            </div>
            <div className="place-order-inner-box">
              <div className="place-order-cost">Total Price</div>
              <i className="fa-solid fa-tooth" />
              {totalPrice + Math.ceil(totalPrice / 100)}
            </div>
            <button className="place-order-button green" onClick={handleCheckout}>Checkout</button>
          </div>
          <button className="product-page-button red" onClick={handleEmptyCart}>Empty Kart</button>
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
