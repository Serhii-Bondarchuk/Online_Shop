import shop from '../api/shop'
import * as types from './Types'










const receiveProducts = (products) => {






  return {

  type: types.RECEIVE_PRODUCTS,
  products,
  
  }
}


// Єта функция загружает начальние данние с файла .json
export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products ))
  })
}


// Главний акшн креатор
// добавляет в карту
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})






// При нажатий на кнопку 
export const addToCart = productId => (dispatch, getState) => {



    
      // console.log(getState())

// Если есть что-то на складе то ми добавляем в корзину, если нет ничего то ничего не будет
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }

}






export const checkout = products => (dispatch, getState) => {

  console.log(products)
  

  const { cart } = getState()
  
  console.log(cart) 



  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  
  shop.buyProducts(products, () => {





    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })


    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
