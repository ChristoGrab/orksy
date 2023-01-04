import { useState } from 'react'
import { Modal } from '../../context/Modal'
import AddedToCartPopup from './AddedToCartPopup'
import "./AddToCart.css"

const AddToCart = ({ product }) => {
  
  const [showModal, setShowModal] = useState(false)
  
  const addToCart = async (e) => {
    e.preventDefault();
    
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([product]))
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"))
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    setShowModal(true)
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
