// List of actions
const LOAD_CART = "/cart/load"
const ADD_TO_CART = "/cart/add"

const loadCart = (cart) => {
  return {
    type: LOAD_CART,
    cart
  }
}

const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}

export const loadCartThunk = () => async (dispatch) => {
  const response = localStorage.getItem("orksycart")
  const data = JSON.parse(response)
  console.log("cart in thunk: ", data)
  dispatch(loadCart(data))
  return data;
}

export const addToCartThunk = (item) => () => async (dispatch) => {
  
  console.log("triggered dispatch")
  if (!localStorage.getItem("orksycart")) {
    localStorage.setItem("orksycart", JSON.stringify([item]))
  } else {
    let cart = JSON.parse(localStorage.getItem("orksycart"))
    cart.push(item)
    localStorage.setItem("orksycart", JSON.stringify(cart))
  }
  
  dispatch(addToCart(item))
  return item
}

// REDUCER //

const initialState = { cart: {} }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LOAD_CART: {
      const myCart = {}
      if (action.cart) {
      action.cart.forEach(item => {
        myCart[item.id] = item
      
      })
    }
      
      return {
        ...state,
        cart: myCart
      }
    }
    
    case ADD_TO_CART: {
      const myCart = {
        ...state.cart,
        [action.item.id]: action.item
      }
      
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
