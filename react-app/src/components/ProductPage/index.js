import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import "./ProductPage.css"
import { getProductThunk, clearProduct } from "../../store/products";

const ProductPage = () => {

  const product = useSelector(state => state.products.singleProduct)

  const dispatch = useDispatch()
  const { productId } = useParams();
  const [descrip, setDescrip] = useState(true)
  const [shipping, setShipping] = useState(true)

  // Calculate current date and set shipping date to week from today
  let today = new Date()
  let shippingDate = new Date()
  shippingDate.setDate(new Date().getDate() + Math.floor(Math.random() * (6 - 3) + 3))
  let deliveryDate = new Date()
  deliveryDate.setDate(new Date().getDate() + Math.floor(Math.random() * (10 - 7) + 7))

  // get product and clear state
  useEffect(() => {
    dispatch(getProductThunk(productId))
    return (() => dispatch(clearProduct()))
  }, [dispatch, productId])

  if (!product) return null;

  //function to toggle showing product description
  const showDescription = async (e) => {
    e.preventDefault();
    setDescrip(!descrip)
  }

  //function to toggle showing shipping info
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

          <div className="product-description-container">
            {descrip === true
              ? <button id="show-description-button" onClick={showDescription}>
                <span>Description</span>
                <span><i className="fa-solid product-details-caret fa-caret-up" /></span>
              </button>
              : <button id="show-description-button" onClick={showDescription}>
                <span>Description</span>
                <span><i className="fa-solid product-details-caret fa-caret-down" /></span>
              </button>
            }
            
            {descrip === true
              ? <div className="product-description-text">{product.description}</div>
              : <div className="product-description-text-closed"></div>
            }

            {shipping === true
              ? <button id="show-shipping-button" onClick={showShipping}>
                <span>Shipping and return policies</span>
                <span><i className="fa-solid product-details-caret fa-caret-up" id="up"/></span>
              </button>
              : <button id="show-shipping-button" onClick={showShipping}>
                <span>Shipping and return policies</span>
                <span><i className="fa-solid product-details-caret fa-caret-down" id="down"/></span>
              </button>
            }
            
            {shipping === true && (
              <div className="product-shipping-info">
                <div>
                  <div id="arrival-estimate-text">Estimated Arrival</div>
                  <div id="arrival-date-text">{deliveryDate.toLocaleDateString('en-US')}</div>
                </div>
                <div id="shipping-tracker-container">

                  <div className="shipping-tracker" id="st-1">
                    <i className="fa-regular fa-handshake ship-i"></i>
                    {today.toLocaleDateString('en-US')}
                    <span className="shipping-tracker-text">Order Placed</span>
                  </div>
                  <div className="shipping-tracker" id="st-2">
                    <i className="fa-brands fa-space-awesome ship-i"></i>
                    {shippingDate.toLocaleDateString('en-US')}
                    <span className="shipping-tracker-text">Rokkit Leaves</span>
                  </div>
                  <div className="shipping-tracker" id="st-3">
                    <i className="fa-solid fa-gift ship-i"></i>
                    {deliveryDate.toLocaleDateString('en-US')}
                    <span className="shipping-tracker-text">Delivered!</span>
                  </div>
                </div>
                <div id="shipping-cost-message">Cost to ship</div>
                <div id="shipping-cost"><i className="fa-solid fa-tooth" />{product.price / 100}</div>
                <div id="carbon-message">Orksy proudly kontributes to carbon emissions by using da finest pollutants in da sektor.</div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
