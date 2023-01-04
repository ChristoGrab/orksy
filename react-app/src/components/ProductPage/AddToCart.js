import "./AddToCart.css"

const AddToCart = ({ product }) => {
  
  const addToCart = async (e) => {
    e.preventDefault();
    
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([product]))
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"))
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }
  
  return (
    <button id="add-to-cart-button" className="product-page-button green" onClick={addToCart}>
      Add to Kart
    </button>
  )
}

export default AddToCart;
