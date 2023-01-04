import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CartItemCard.css'

const CartItemCard = ({ product, index }) => {
  
  const removeItemFromCart = async (e) => {
    e.preventDefault();
    
    let cart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < cart.length; i++) {
      if (i === index) cart.splice(i, 1)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return (
    <Link to={`/products/${product.id}`} className="cartitem-card">
      <img src={product.image} className="cartitem-card-image" alt={product.name} />
      <div className="cartitem-card-name">{product.name}</div>
      <div className="cartitem-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
      <button className="remove-from-cart-button" onClick={removeItemFromCart}>Remove</button>
    </Link>
  )
}

export default CartItemCard;
