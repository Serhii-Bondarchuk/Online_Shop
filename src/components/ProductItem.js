import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => {
 


return (  
    <div>
  <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between',
  border: '1px solid grey', borderRadius: '8px', paddingLeft: '15px',
  boxShadow: '10px 10px 10px -3px' }}>
    <Product
      id = { product.id }
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <button className = 'btn btn-success'
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to Order' : 'Sold Out'}
    </button>
  </div>
  </div>
 )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
