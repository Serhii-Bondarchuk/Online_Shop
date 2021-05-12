import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, id }) => (
  <div style = {{     alignItems: 'center', display: 'flex' }} >
   <span style = {{ marginRight: '10px', fontSize: '20px',

    textDecoration: quantity ? 'none' : 'line-through'     

    }} ><strong> { id } </strong></span>
  
    
  <span style = {{ textDecoration: quantity ? 'none' : 'line-through',
   backgroundColor: quantity? 'none': 'orange', color: quantity? 'white': 'black', fontSize:'25px'   }} >
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}</span>
  </div>
)

// Product.propTypes = {
//   price: PropTypes.number,
//   quantity: PropTypes.number,
//   title: PropTypes.string
// }

export default Product
