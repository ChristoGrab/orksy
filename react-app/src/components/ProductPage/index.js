import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import "./ProductPage.css"
import { getProductThunk, clearProduct } from "../../store/products";

const ProductPage = () => {

  const product = useSelector(state => state.products.singleProduct)

  const dispatch = useDispatch()
  const { productId } = useParams();
  const [descrip, setDescrip] = useState(false)
  const [shipping, setShipping] = useState(false)

  useEffect(() => {
    dispatch(getProductThunk(productId))

    return (() => dispatch(clearProduct()))
  }, [dispatch, productId])

  if (!product) return null;

  const showDescription = async (e) => {
    e.preventDefault();
    setDescrip(!descrip)
  }

  const showShipping = async (e) => {
    e.preventDefault();
    setShipping(!shipping)
  }

  return (
    <div>
      <div className="product-page-container">
        <div className="product-page-image-container">
          <img className="product-page-image" src={product.image} alt={product.name} />
        </div>
        <div className="product-page-details-container">
          <Link to={`/store/${product.store_id}`}
            className="product-page-store-link">{product.store?.name}
          </Link>
          <div className="product-page-name">{product.name}</div>
          <div className="product-page-price"><i className="fa-solid fa-tooth" />{product.price}</div>
        </div>

      </div>
      <div className="product-description-container">
        <button id="show-description-button" onClick={showDescription}><span>Description</span><span><i id="show-description-caret" className="fa-solid fa-caret-down" /></span></button>
        {descrip === true && (
          <div className="product-description-text">{product.description}</div>
        )}
      </div>
      <div className="shipping-info">
        <button id="show-shipping-button" onClick={showShipping}><span>Shipping and return policies</span><span><i className="fa-solid fa-caret-down" /></span></button>
      </div>
    </div>
  )
}

export default ProductPage;
