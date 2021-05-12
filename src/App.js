import React from 'react'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import Carusel from './components/Carusel'
import Modal from './components/modal/Modal'

const App = () => (
  <div>

      <Carusel />
       

    <h2 style = {{ textAlign: 'center', marginBottom: '50px' }} > Online Shopping from Store</h2>
     <div className= 'container'> 
    <h3 className ='my' >  created by Serhii Bondarchuk </h3>
    <p className= 'my' 
     style = {{   marginBottom: '50px' }}   

      >amax9111@gmail.com  </p>    
      </div>
    <ProductsContainer />
    <br/><hr/>
       <CartContainer />
  </div>
)

export default App