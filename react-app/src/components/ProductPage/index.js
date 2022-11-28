import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./ProductPage.css"
import { getProductThunk } from "../../store/products";

const ProductPage = () => {

  const product = useSelector(state => state.products.singleProduct)
  
  const dispatch = useDispatch()
  const { productId } = useParams();

  
  console.log("Product Id in component: ", productId)
  
  useEffect(() => {
    dispatch(getProductThunk(productId))
  }, [dispatch, productId])
  
  if (!product) return null;
  
  return (
    <div className="product-page-container">
      <div className="product-page-image-container">
        <img className="product-page-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-page-details-container">
        <div className="product-page-store-link">Store Link</div>
        <div className="product-page-name">{product.name}</div>
        <div className="product-page-price">{product.price} <i className="fa-solid fa-tooth" /></div>
      </div>
    </div>
  )
}

export default ProductPage;
