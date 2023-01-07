// List of actions
const LOAD_CART = "/cart/load"
const ADD_TO_CART = "/cart/add"
const REMOVE_FROM_CART = "/cart/remove"

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

const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    index
  }
}

export const loadCartThunk = () => async (dispatch) => {

  const response = localStorage.getItem("orksycart")
  const data = JSON.parse(response)
  dispatch(loadCart(data))
  return data;

}

export const addToCartThunk = (item) => async (dispatch) => {

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

export const removeFromCartThunk = (index) => async (dispatch) => {
  
  let cart = JSON.parse(localStorage.getItem("orksycart"))
  
  for (let i = 0; i < cart.length; i++) {
    if (i === index) cart.splice(i, 1)
  }
  localStorage.setItem("orksycart", JSON.stringify(cart))
  
  dispatch(removeFromCart(index))
}

// REDUCER //

const initialState = { cart: {}, cartSize: 0 }

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
        cart: myCart,
        cartSize: Object.keys(myCart).length
      }
    }

    case ADD_TO_CART: {
      const myCart = {
        ...state.cart,
        [action.item.id]: action.item
      }
      
      return {
        ...state,
        cart: myCart,
        cartSize: Object.keys(myCart).length
      }
    }
    
    case REMOVE_FROM_CART: {
      const myCart = {
        ...state.cart
      }
      delete myCart.cart[action.index]
      return {
        ...state,
        cart: myCart,
        cartSize: Object.keys(myCart).length
      }
    }
    
    default:
      return state;
  }
}

export default cartReducer
