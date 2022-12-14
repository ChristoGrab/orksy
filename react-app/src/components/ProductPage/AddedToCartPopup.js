import { useHistory } from "react-router-dom";
import "./AddedToCartPopup.css";

const AddedToCartPopup = ({ product }) => {

  const history = useHistory();

  const viewCartPage = async (e) => {
    e.preventDefault();

    history.push('/cart')
  }

  const keepShopping = async (e) => {
    e.preventDefault();

    history.push('/')
  }

  return (
    <div className="added-to-cart-popup">
      <div className="cart-popup-box-1">
        <img className="added-to-cart-image" src={product.image} alt={product.name} />
        <i className="fa-solid fa-check" />
        <h3>{product.name} added to Kart</h3>
      </div>
      <div className="cart-popup-box-2">
      <button className="product-page-button green" onClick={viewCartPage}>View Kart</button>
      <button className="product-page-button red" onClick={keepShopping}>Keep Shoppin'</button>
      </div>
    </div>
  )
}

export default AddedToCartPopup;
