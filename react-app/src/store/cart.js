// List of actions
const GET_CART = "/cart/get"
const ADD_TO_CART = "/cart/add"
const REMOVE_FROM_CART = "/cart/remove"
const EMPTY_CART = "/cart/empty"

const getCart = (cart) => {
  return {
    type: GET_CART,
    cart
  }
}

const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}

const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

const emptyCart = () => {
  return {
    type: EMPTY_CART
  }
}

export const getCartThunk = () => async (dispatch) => {
  
  
  // If local storage is empty, create a new empty cart
  if (!localStorage.getItem("orksycart")) {
    localStorage.setItem("orksycart", JSON.stringify({
      "itemList": [],
      "cartSize": 0
    }))
  }
  
  const response = localStorage.getItem("orksycart")
  
  const data = JSON.parse(response)
  
  dispatch(getCart(data))
  return data;

}

export const addToCartThunk = (item) => async (dispatch) => {
  
  let cart;
  
  // If local storage is empty, create a new cart
  // place the item in the cart, and set the cart size to 1
  if (!localStorage.getItem("orksycart")) {
    localStorage.setItem("orksycart", JSON.stringify({
      "itemList": [item],
      "cartSize": 1
    }))

  // If local storage is not empty, get the cart from local storage
  // add the item to the cart, and update the cart size
  } else {

    cart = JSON.parse(localStorage.getItem("orksycart"))
    cart["itemList"].push(item)
    cart["cartSize"] = cart["itemList"].length
    localStorage.setItem("orksycart", JSON.stringify(cart))
  }
  
  dispatch(addToCart(item))
  return item
}

export const removeFromCartThunk = (id) => async (dispatch) => {
  
  let cart = JSON.parse(localStorage.getItem("orksycart"))
  let cartItems = cart["itemList"]
  // Check the id
  for (let i = 0; i < cartItems.length; i++) {
    let currentItem = cartItems[i];
    if (currentItem.id === id) {
      cartItems.splice(i, 1)
      cart["cartSize"] = cart["itemList"].length
      break;
    }
  }
  
  console.log("Cart after splice: ", cart)

  localStorage.setItem("orksycart", JSON.stringify(cart))
  
  dispatch(removeFromCart(id))
}

export const emptyCartThunk = () => async (dispatch) => {
  
  localStorage.setItem("orksycart", JSON.stringify({
    "itemList": [],
    "cartSize": 0
  }))
    
  dispatch(emptyCart())
}

// REDUCER //

const initialState = { itemList: {}, cartSize: 0 }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CART: {
      const myCart = {}
      
      if (action.cart) {
      action.cart.itemList.forEach(item => {
        myCart[item.id] = item
      })
    }

      return {
        ...state,
        itemList: myCart,
        cartSize: action.cart["cartSize"] || 0
      }
    }

    case ADD_TO_CART: {
      const myCart = {
        ...state.itemList,
        [action.item.id]: action.item
      }

      return {
        ...state,
        itemList: myCart,
        cartSize: Object.keys(myCart).length
      }
    }

    case REMOVE_FROM_CART: {

      const myCart = {
        ...state,
        cartSize: state.cartSize - 1
      };

      console.log(myCart)
      delete myCart.itemList[action.id]

      return {
        ...state,
        itemList: myCart.itemList,
        cartSize: Object.keys(myCart.itemList).length
      }
    }

    case EMPTY_CART: {
      return {
        ...state,
        itemList: {},
        cartSize: 0
      }
    }

    default:
      return state;
  }
}

export default cartReducer;
