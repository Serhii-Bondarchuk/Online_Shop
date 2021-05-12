/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100


export default {

  getProducts: (cb, timeout) => {
  
  setTimeout( () => {
     return	cb(_products), timeout || TIMEOUT
       }
  	)},




  buyProducts: (payload, cb, timeout) => {
  	console.log(payload)
  	setTimeout(() => cb(), timeout || TIMEOUT)
  }

}
