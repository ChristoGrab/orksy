import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromCartThunk } from '../../store/cart'
import './CartItemCard.css'

const CartItemCard = ({ product, id }) => {
  
  const dispatch = useDispatch()
  
  const removeItemFromCart = (e) => {
    e.preventDefault();
    
    dispatch(removeFromCartThunk(id))
  }

  return (
    <>
    <div className="cartitem-card">
      <img src={product.image} className="cartitem-card-image" alt={product.name} />
      <Link to={`/products/${product.id}`} className="cartitem-card-name">{product.name}</Link>
      <div className="cartitem-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
      <button className="remove-from-cart-button" onClick={removeItemFromCart}>Remove</button>
    </div>
    </>
  )
}

export default CartItemCard;
