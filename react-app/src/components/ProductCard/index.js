import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  
  
  
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img src={product.image} className="product-card-image" alt={product.name} />
      <div className="product-card-name">{product.name}</div>
      <div className="product-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
    </Link>
  )
}

export default ProductCard
