import { useHistory } from "react-router-dom";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  
  const history = useHistory();
  
  const openCartPage = async (e) => {
    e.preventDefault();
    
    history.push("/cart")
  }
  
  return (
      <i className="fa-solid fa-cart-shopping" onClick={openCartPage}/>
  )
}

export default ShoppingCart;
