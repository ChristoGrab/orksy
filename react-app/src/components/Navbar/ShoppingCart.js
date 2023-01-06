import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { loadCartThunk } from "../../store/cart";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(state => Object.values(state.cart.cart))
  const [cartSize, setCartSize] = useState(0)
  
  useEffect(() => {
    dispatch(loadCartThunk())
    console.log(cartSize)
    setCartSize(cart.length)
    console.log(cartSize)
  }, [dispatch, cart.length])
  
  const openCartPage = async (e) => {
    e.preventDefault();
    
    history.push("/cart")
  }

  return (
      <div className="shopping-cart-box">
      <i className="fa-solid fa-cart-shopping" onClick={openCartPage}/>
      {cartSize > 0 
        ? <div id="shopping-cart-numbers">{cartSize}</div>
        : <div id="shopping-cart-numbers no-display"></div>}
      </div>
  )
}

export default ShoppingCart;
