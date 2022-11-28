import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./ProductPage.css"

const ProductPage = () => {
  
  const dispatch = useDispatch()
  const { projectId } = useParams;
  const product = useSelector(state => state.products)
  
  useEffect(() => {
    
  })
  
  return (
    <div className="product-page-container">
      <div className="product-page-image-container">product image</div>
      <div className="product-page-details-container">
        <div className="product-page-store-link">Store Link</div>
        <div className="product-page-name">Product Name</div>
        <div className="product-page-price">Price</div>
      </div>
    </div>
  )
}

export default ProductPage;
