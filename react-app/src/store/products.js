import storesReducer from "./stores";

// List of Actions
const LOAD_PRODUCTS = "products/load";
const GET_PRODUCT = "products/getOne";
const CLEAR_PRODUCT = "products/clear";

// PRODUCT ACTION CREATORS //
const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
}

const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    product
  }
}

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT
  }
}

// PRODUCT THUNKS CREATORS //
export const loadProductsThunk = () => async (dispatch) => {
  const response = await fetch('/api/products');

  const data = await response.json();
  dispatch(loadProducts(data));
  return data;
}

export const getProductThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`)
  
  const data = await response.json();
  dispatch(getProduct(data))
  return data;
}

const initialState = { productList: {}, singleProduct: {} }

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LOAD_PRODUCTS: {
      const allProducts = {}
      action.products.Products.forEach(product => {
        allProducts[product.id] = product
      })
      
    return {
      ...state,
      productList: allProducts
    }
  }

    case GET_PRODUCT: {
      return {
        ...state,
        singleProduct: action.product
      }
    }
    
    case CLEAR_PRODUCT: {
      return {
        ...state,
        singleProduct: {}
      }
    }
    
    default:
      return state;
  }
}

export default productsReducer;
