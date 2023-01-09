import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { getCartThunk } from "../../store/cart";
import "./ShoppingCart.css"

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [cartSize, setCartSize] = useState(0);
  const cart = useSelector(state => state.cart.cartSize)


  useEffect(() => {

    dispatch(getCartThunk())
    .then(response => {
      setCartSize(response["cartSize"])
    })
  }, [cart])


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
