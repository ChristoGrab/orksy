import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  
  const history = useHistory();
  const [cartSize, setCartSize] = useState(0)
  
  const openCartPage = async (e) => {
    e.preventDefault();
    
    history.push("/cart")
  }
  
  useEffect(() => {
    let itemsInCart = JSON.parse(localStorage.getItem('cart'))
    
    if (itemsInCart) setCartSize(itemsInCart.length)
  }, [])

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
