import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import CartItemCard from './CartItemCard'
import { getCartThunk, emptyCartThunk } from '../../store/cart'
import "./CartPage.css"

const RadioInputs = () => {
  const [selectedPayment, setSelectedPayment] = useState("M");
  
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  }
  
  return (
    <fieldset id="payment-type">
      <legend id="payment-legend">How ye'll pay</legend>
      <div className="radio-container">
        <input 
          type="radio" 
          className="payment-radio" 
          name="payment" 
          id="master-toof" 
          value="M"
          checked={selectedPayment === "M"}
          onChange={handlePaymentChange}
        />
        <label for="master-toof" className="payment-label">Master <i className="fa-solid fa-tooth" /></label>
      </div>
      <div className="radio-container">
        <input 
          type="radio" 
          className="payment-radio" 
          name="payment" 
          id="space-pal" 
          value="S" 
          checked={selectedPayment === "S"}
          onChange={handlePaymentChange}
        />
        <label for="space-pal" className="payment-label">SpacePal</label>
      </div>
      <div className="radio-container">
        <input 
          type="radio" 
          className="payment-radio" 
          name="payment" 
          id="orkle" 
          value="O" 
          checked={selectedPayment === "O"}
          onChange={handlePaymentChange}
        />
        <label for="orkle" className="payment-label">Orkle Pay</label>
      </div>
    </fieldset>
  )
}

const CartPage = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const cartItems = useSelector(state => Object.values(state.cart.itemList))
  const [totalPrice, setTotalPrice] = useState(0)
  const [userHasCheckedOut, setUserHasCheckedOut] = useState(false)

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

    setUserHasCheckedOut(true)
    handleEmptyCart(e);
  }

  const redirectUser = (e) => {
    e.preventDefault();

    history.push('/')
  }

  // This function will be run in the useEffect anytime there is a change to the cart, updating the total price
  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price
    })
    return totalPrice;
  }

  // When a user hits check-out, this JSX will display a message linking them to my github/portfolio
  const messageAfterCheckout = (
    <div id="checkout-popup">
      <div id="checkout-message">
        <h2>Thanks for using Orksy!</h2>
        <p className="user-message-text">This project is still a work in progress, and a persistent order history is next on the list of to-do features.</p>
        <p className="user-message-text">If you haven't already, I recommend checking out some of the other features on the site. Try creating your own store, adding some products, and maybe leaving a review or two on some of the products currently on display!</p>
        <p className="user-message-text">If you have any questions or feedback about this project, please feel free to reach out to me using the links below:</p>
        <div className="checkout-contact-links">
          <a href="https://www.linkedin.com/in/christo-grabowski-894a82a6" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
          </a>
          <a href="mailto:christo.grab@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Badge" />
          </a>
        </div>
        <p className="user-message-text">If you want to get to know my work better, please check out my Github or portfolio here:</p>
        <div className="checkout-contact-links">
          <a href="https://github.com/ChristoGrab" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" />
          </a>
          <a href="https://christograb.github.io/" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/Portfolio-1f5429?style=for-the-badge&logo=react&logoColor=white" alt="Portfolio Badge" />
          </a>
        </div>
      </div>
      <button className="product-page-button green" onClick={redirectUser}>Back to Orksy</button>
    </div>
  )

  return (
    <div className="cart-page-container">
      {userHasCheckedOut && messageAfterCheckout}
      <div id="purchase-protection-box">
        <i className="fa-solid fa-handshake-simple" />
        <p><strong>Orksy purchase protekshun:</strong> Shop konfidently on Orksy knowin' if somefin' goes wrong wiv an order, you kin always use da faulty produkt to whack some skulls in.</p>
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
            
            <RadioInputs />
              
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
            
            <div className="place-order-inner-box" id="total-price">
              <div className="place-order-cost">Total Price</div>
              <i className="fa-solid fa-tooth" />
              {totalPrice + Math.ceil(totalPrice / 100)}
            </div>
            
            <button id="empty-cart-button" className="place-order-button green" onClick={handleCheckout}>Checkout</button>
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
