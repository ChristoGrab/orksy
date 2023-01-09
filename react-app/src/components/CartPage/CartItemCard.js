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
    <Link to={`/products/${product.id}`} className="cartitem-card">
      <img src={product.image} className="cartitem-card-image" alt={product.name} />
      <div className="cartitem-card-name">{product.name}</div>
      <div className="cartitem-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
    </Link>
    <button className="remove-from-cart-button" onClick={removeItemFromCart}>Remove</button>
    </>
  )
}

export default CartItemCard;
