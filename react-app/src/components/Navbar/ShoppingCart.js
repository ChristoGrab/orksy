import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  
  const history = useHistory();
  const [cartSize, setCartSize] = useState(0)
  const [cartSizeHasChanged, setCartSizeHasChanged] = useState(false)
  let itemsInCart;
  
  
  useEffect(() => {
    
    itemsInCart = JSON.parse(localStorage.getItem('cart'))
    if (itemsInCart) setCartSize(itemsInCart.length)
    setCartSizeHasChanged(!cartSizeHasChanged)

  })
  
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
