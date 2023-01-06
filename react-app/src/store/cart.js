// List of actions
const LOAD_CART = "/cart/load"

const loadCart = (cart) => {
  return {
    type: LOAD_CART,
    cart
  }
}

export const loadCartThunk = () => async (dispatch) => {
  const response = localStorage.getItem("cart")
  
  const data = JSON.parse(response)
  dispatch(loadCart(data))
  return data;
}

// REDUCER //

const initialState = { cart: {} }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LOAD_CART: {
      const myCart = {}
      action.cart.forEach(item => {
        myCart[item.id] = item
      })
      
      return {
        ...state,
        cart: myCart
      }
    }
    
    default:
      return state;
  }
}

export default cartReducer
