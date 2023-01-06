import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img src={product.image} className="product-card-image" alt={product.name} />
      <div className="product-card-name">{product.name}</div>
      {product.average_rating > 0
      ? <div className="product-card-avg-rating"><i className="fa-solid fa-star" /> {product.average_rating}</div>
      : <div className="product-card-avg-rating">No ratingz yet</div>
      }
      <div className="product-card-price"><i className="fa-solid fa-tooth" />{product.price}</div>
    </Link>
  )
}

export default ProductCard
