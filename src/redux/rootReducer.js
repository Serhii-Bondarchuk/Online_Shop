import {combineReducers} from 'redux'
import  cart, * as fromCart from './cart'
import products, * as fromProducts from './products'



// console.log(state)

export const rootReducer =combineReducers( {
      cart,
      products

} )


// Єта функция возвращает масив с какими Id били вибрани товари
const getAddedIds = state => {
    // console.log(fromCart.getAddedIds(state.cart))
return  fromCart.getAddedIds(state.cart)

}



// Эта функция возвращает количество товара вибраного по Id
// Если три разних Id, то функция отработает три раза и покажет три числа

const getQuantity = (state, id) => {
   // console.log( fromCart.getQuantity(state.cart, id))
   return  fromCart.getQuantity(state.cart, id)
}



const getProduct = (state, id) => {
      
      // console.log(fromProducts.getProduct(state.products, id))   

   return  fromProducts.getProduct(state.products, id)
}






export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

