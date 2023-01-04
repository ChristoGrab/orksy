import { Link } from 'react-router-dom'
import './CartItemCard.css'

const CartItemCard = ({ product }) => {
  
  return (
    <Link to={`/products/${product.id}`} className="cartitem-card">
      <img src={product.image} className="cartitem-card-image" alt={product.name} />
      <div className="cartitem-card-name">{product.name}</div>
      <div className="cartitem-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
    </Link>
  )
}

export default CartItemCard;
