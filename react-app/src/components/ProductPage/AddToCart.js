import { useState } from 'react'
import { useDispatch } from "react-redux"
import AddedToCartPopup from './AddedToCartPopup'
import { addToCartThunk } from '../../store/cart'
import "./AddToCart.css"

const AddToCart = ({ product }) => {
  
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [addedToCartPopup, setAddedToCartPopup] = useState(false)
  
  
  let cartPopupDiv = (
      <div id="added-to-cart-popup">
        <AddedToCartPopup product={product} />
      </div>
    )
  
  const addToCart = (e) => {
    e.preventDefault();

    dispatch(addToCartThunk(product))
    .then(setAddedToCartPopup(true))
  }
  
  
  
  return (
    <>
    <button id="add-to-cart-button" className="product-page-button green" onClick={addToCart}>
      Add to Kart
    </button>
    {addedToCartPopup && (cartPopupDiv)}
    </>
  )
}

export default AddToCart;
