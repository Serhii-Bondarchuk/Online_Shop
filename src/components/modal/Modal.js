import React from 'react'
import './Modal.css'


export default class Modal extends React.Component {
     constructor( props ){
       super(props)

       this.state = {
       	  isOpen : false 
       }


     }

     
         handlerBuy = () => {
       this.setState({isOpen: true})
       this.props.onBuy()
      console.log('211111111111111111111111111111')
       }



	render(){




 // console.log(this.state.isOpen)  
 console.log(this.props) 


		return(
               
               <React.Fragment>
                  <button onClick = {   this.handlerBuy   } 
                  className='btn btn-primary'
                  disabled = { this.props.hasProd ? '' : 'disabled' } 

                  >
                   {this.props.children}</button>                     

                  {this.state.isOpen?  (<div className = 'modall' >

                       <div className='modall-body' > 
                           <h1> Success </h1>
                           <p>  Thank you for your order ! </p>
                           <button
                              
                              className = 'btn btn-dark'
                           

                            onClick = { () => this.setState({isOpen : false
                           }) }> Close </button> 
                       </div>

                  </div>) : null }

               </React.Fragment>

			)
	}
}