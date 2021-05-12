import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Modal from './modal/Modal'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        id = { product.id }
      />
    )
  ) : (
    <em>Please choose your Product and press Add to Order.</em>
  )

  console.log(nodes)





  return (
    <div className ='container cart' style = {{ opacity: '1', marginBottom: '100px' }}   >
      <h3> Your Order</h3>
      <div className = 'cart' style = {{ marginBottom: '20px', marginTop: '20px' }} > {nodes}< /div>
      <p style ={{ fontSize: '30px' }} >Total: &#36;{total}</p>
      <Modal onBuy={onCheckoutClicked}
        hasProd={hasProducts}
         >
        BUY
      </Modal>
    </div>
  )
}

// Cart.propTypes = {
//   products: PropTypes.array,
//   total: PropTypes.string,
//   onCheckoutClicked: PropTypes.func
// }

export default Cart
