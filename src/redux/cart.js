import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from './Types'

const  initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
          
        // Проверяет есть ли такой товар в карте (корзине)

      if (state.indexOf(action.productId) !== -1) {
         
         // console.log(state)


        return state
      }

      
       

      return [ ...state, action.productId]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
          



      return { ...state,
         // Считает количетво вібраного товара

        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }


}




   // Єта функция редусер получает state и productId и возвращает количество вибраних товаров 

  
export const getQuantity = (state, productId) =>{
  // console.log('efgrfrgrg')
    // console.log((state.quantityById[productId]))
 return state.quantityById[productId] || 0
}

    // эта функция возвращает какай Id товара бил вибран

export const getAddedIds = state => {
   // console.log(state.addedIds)

  return  state.addedIds
}





const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
