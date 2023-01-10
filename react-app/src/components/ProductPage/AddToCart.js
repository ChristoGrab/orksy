import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import AddedToCartPopup from './AddedToCartPopup'
import { addToCartThunk } from '../../store/cart'
import "./AddToCart.css"

const AddToCart = ({ product }) => {
  
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [addedToCartPopup, setAddedToCartPopup] = useState(false)
  let cartButton;
  
  let cartPopupDiv = (
      <div id="added-to-cart-popup">
        <AddedToCartPopup product={product} />
      </div>
    )

  const addToCart = (e) => {
    e.preventDefault();

    let cart = localStorage.getItem("orksycart")
    if (cart !== null) {
      cart = JSON.parse(cart)
      for (let keys of cart.itemList) {
      if (keys["id"] === product.id) {
        return window.alert("This item is already in your cart!")
      }
    }
  }

  dispatch(addToCartThunk(product))
  .then(setAddedToCartPopup(true))
  }
  
  if (sessionUser) {
    cartButton = (
      <button id="add-to-cart-button" className="product-page-button green" onClick={addToCart}>
        Add to Kart
      </button>
    )
  } else {
    cartButton = (
      <div></div>
    )
  }


  return (
    <>
    {addedToCartPopup ? cartPopupDiv : cartButton}
    </>
  )
}

export default AddToCart;
