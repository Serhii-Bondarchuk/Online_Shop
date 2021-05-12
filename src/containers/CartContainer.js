import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../redux/actions'
import { getTotal, getCartProducts } from '../redux/rootReducer'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => {



//  <div  className = 'container cart'  style={{ marginBottom: '20px', display: 'flex',
//      justifyContent: 'space-between',
//   border: '1px solid grey', borderRadius: '8px', paddingLeft: '15px', marginBottom:'100px' }}
//   >  

// </div>


return	(
   
     <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
    

)
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
