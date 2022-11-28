import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import "./ProductPage.css"
import { getProductThunk, clearProduct } from "../../store/products";

const ProductPage = () => {

  const product = useSelector(state => state.products.singleProduct)
  
  const dispatch = useDispatch()
  const { productId } = useParams();

  
  console.log("Product Id in component: ", productId)
  
  useEffect(() => {
    dispatch(getProductThunk(productId))
    
    return (() => dispatch(clearProduct()))
  }, [dispatch, productId])
  
  if (!product) return null;
  
  return (
    <div>
    <div className="product-page-container">
      <div className="product-page-image-container">
        <img className="product-page-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-page-details-container">
        <Link to={`/store/${product.store_id}`}
        className="product-page-store-link">Check out da store
        </Link>
        <div className="product-page-name">{product.name}</div>
        <div className="product-page-price"><i className="fa-solid fa-tooth" />{product.price}</div>
      </div>

    </div>
    <div className="product-page-description">
        {product.description}
      </div>
    </div>
  )
}

export default ProductPage;
