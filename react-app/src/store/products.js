// List of Actions
const LOAD_PRODUCTS = "products/load";
const GET_PRODUCT = "products/getOne";
const CLEAR_PRODUCT = "products/clear";
const CREATE_PRODUCT = "products/create";
const DELETE_PRODUCT = "products/delete";

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

const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id
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

export const getSearchProducts = (keyword) => async (dispatch) => {
  const response = await fetch(`/api/products/search/${keyword}`)

  const data = await response.json();
  dispatch(loadProducts(data))
  
}

export const createProductThunk = (product) => async (dispatch) => {
  const response = await fetch('/api/products/new', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  })

  if (response.ok) {
    const newProduct = await response.json();
    dispatch(createProduct(newProduct))
    return newProduct
  } else {
    const errorData = await response.json()
    return errorData;
  }
}

export const deleteProductThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE"
  })


  if (response.ok) {
    const data = await response.json();
    dispatch(deleteProduct(id))
    return data
  } else {
    const errorData = await response.json()
    return errorData
  }
}

// REDUCER //

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
        productList: {},
        singleProduct: {}
      }
    }

    case CREATE_PRODUCT: {
      const allProducts = {
        ...state.products,
        [action.product.id]: action.product
      }

      return {
        ...state,
        productList: allProducts,
        singleProduct: action.product
      }
    }
    
    case DELETE_PRODUCT: {
      const allProducts = {
        ...state.products
      }
      delete allProducts.productsList[action.id]
      return {
        ...state,
        productList: allProducts,
        singleProduct: {}
      }
    }

    default:
      return state;
  }
}

export default productsReducer;
