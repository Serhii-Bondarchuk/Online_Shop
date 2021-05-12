import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from './Types'




// єта функция отнимает одну единицу товара от склада первоначального значения
const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
           // console.log(state) - почемуто только конкретний елемент
         // console.log(state.inventory)

        return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {

 
// Єтот case срабативает при загрузке

    case RECEIVE_PRODUCTS:
       // console.log(Array.isArray(action.products))
       // console.log(state)

        

         // К нам прилетает при загрузке масив из обьектов
          // А ми переделиваем его на обьект с ключами по каждому товару
         // { 1 : { id: 1, title: 'vsfgdfg' }, 2 : { ...} } 

      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }


     
    default:


      const { productId } = action
      // console.log(productId)
      
   
   // Если нажимаем на кнопку добавить товар в корзину
      if (productId) {
          
          // прилетает только вибраний Id { Id: ..., }
          // console.log( {[productId]: products(state[productId], action) })
        

        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

// Єта функция возвращает Id товара

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
        
        // прилетает масив с обьектов при загрузке с сервера (.json)
        // console.log(action)

      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  // Перечень товара
  byId,
    // Id
  visibleIds
})


export const getProduct = (state, id) =>{
  
    // console.log(state.byId[id])

   return  state.byId[id]
}



export const getVisibleProducts = state => {
  // console.log(state)
  return state.visibleIds.map(id => {
    // console.log(getProduct(state, id))
    return  getProduct(state, id)
  } )
}

