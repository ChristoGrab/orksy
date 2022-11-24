// List of Actions
const LOAD_STORES = 'stores/load';
const CREATE_STORE = 'stores/create';
const DELETE_STORE = 'stores/delete';
const UPDATE_STORE = 'stores/update';
const GET_STORE = 'stores/getOne';
const GET_MY_STORE = "store/getMine"
const ADD_IMAGE = 'stores/addImage';
const CLEAR_STORE = 'stores/clear';

// ------ SESSION ACTION CREATORS ------ //
const loadStores = (stores) => {
  return {
    type: LOAD_STORES,
    stores
  };
};

const createStore = (store) => {
  return {
    type: CREATE_STORE,
    store
  };
};

const getStore = (store) => {
  return {
    type: GET_STORE,
    store
  }
}

const getMyStore = (store) => {
  return {
    type: GET_MY_STORE,
    store
  }
}

const editStore = (store) => {
  return {
    type: UPDATE_STORE,
    store
  }
}

const deleteStore = (id) => {
  return {
    type: DELETE_STORE,
    id
  }
}

// const addImage = (image) => {
//   return {
//     type: ADD_IMAGE,
//     image
//   }
// }

export const clearStore = () => {
  return {
    type: CLEAR_STORE
  }
}

// ------ SESSION THUNK CREATORS ------ //

export const loadStoresThunk = () => async (dispatch) => {
  const response = await fetch('/api/stores');

  const data = await response.json();
  dispatch(loadStores(data));
  return data;
}

export const getStoreThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/stores/${id}`)

  const data = await response.json();
  dispatch(getStore(data))
  return data;
}

export const getMyStoreThunk = () => async (dispatch) => {
  const response = await fetch('/api/stores/my-store');
  
  const data = await response.json();
  dispatch(getMyStore(data))
  return data;
}

export const createStoreThunk = (store) => async (dispatch) => {
  const response = await fetch('/api/stores/new', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(store)
  })

  if (response.ok) {
    const newStore = await response.json();
    dispatch(createStore(newStore))
    return newStore
  } else {
    const errorData = await response.json();
    return errorData;
  }
}

export const updateStoreThunk = (storeData, storeId) => async (dispatch) => {
  const response = await fetch(`/api/stores/${storeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(storeData)
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(editStore(data))
  } else {
    const errorData = await response.json();
    return errorData;
  };
}

export const deleteStoreThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/stores/${id}`, {
    method: "DELETE"
  })
  
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteStore(id))
    return data;
  }
}

// export const createImageThunk = (payload, storeId) => async (dispatch) => {
//   const response = await fetch(`/api/stores/${storeId}/images`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payload)
//   })
  
//   if (response.ok) {
//     const newImage = await response.json();
//     dispatch(addImage(newImage))
//   }
// }

const initialState = { stores: {}, singleStore: {} }

// ------ SPOTS REDUCER ------ //
const storesReducer = (state = initialState, action) => {
  // don't declare newState here, JS is weird with spread logic and
  // could mutate the original if we are not careful
  
  switch (action.type) {

    case LOAD_STORES: {
      const allStoresObject = {};
      action.stores.Stores.forEach(store => {
        allStoresObject[store.id] = store;
      })

      return {
        ...state,
        stores: allStoresObject
      }
    }
    
    case GET_STORE: {

      return {
        ...state,
        singleStore: action.store
      }
    }
    
    case GET_MY_STORE: {
      
      return {
        ...state,
        singleStore: action.store
      }
    }

    case CREATE_STORE: {
      
      // create object to update list in allspots
      const allStores = { 
        ...state.stores, 
        [action.store.id]: action.store 
      }
      
      // return copy of state with spots set to allSpots object 
      // and singleSpot set to the action spot.
      return {
        ...state,
        stores: allStores,
        singleSpot: action.store
      }
    }


    
  //   case UPDATE_SPOT: {
  //     const allSpotsObject = {
  //       ...state.spots,
  //       [action.spot.id]: action.spot
  //     }
    
  //   return {
  //     ...state,
  //     spots: allSpotsObject,
  //     singleSpot: action.spot
  //   }
  // }
  
  // case DELETE_SPOT: {
  //   const allSpotsObject = {
  //     ...state.spots
  //   }
  //   delete allSpotsObject[action.id]
  //   return {
  //     ...state,
  //       spots: allSpotsObject,
  //       singleSpot: {}
  //   }
  // }

  //   case ADD_IMAGE: {
      
  //     // create object to update singlespot, and its image array
  //     const singleSpotObject = {
  //       ...state.singleSpot,
  //       SpotImages: [action.image]
  //     }
      
  //     // return a copy of state with singleSpot set to our mutated
  //     // object
  //     return {
  //       ...state,
  //       singleSpot: singleSpotObject
  //     }
  //   }
    
  //   case CLEAR_SPOT: {
  //     return {
  //       ...state,
  //       singleSpot: {}
  //     }
  //   }
    
    default:
      return state;
  }
}

export default storesReducer;
