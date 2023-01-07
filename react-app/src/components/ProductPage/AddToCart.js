import { useState } from 'react'
import { useDispatch } from "react-redux"
import { Modal } from '../../context/Modal'
import AddedToCartPopup from './AddedToCartPopup'
import { addToCartThunk } from '../../store/cart'
import "./AddToCart.css"

const AddToCart = ({ product }) => {
  
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  
  const addToCart = (e) => {
    e.preventDefault();

    dispatch(addToCartThunk(product))
  }
  
  return (
    <button id="add-to-cart-button" className="product-page-button green" onClick={addToCart}>
      Add to Kart
      
      {showModal === true && (
          <Modal onClose={() => setShowModal(false)}>
            <AddedToCartPopup setShowModal={setShowModal} product={product} />
          </Modal>
        )}
      
    </button>
  )
}

export default AddToCart;
