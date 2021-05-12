import React from 'react'
import tv from './pictures/tv.jpg'
import phone  from './pictures/phone.jpg'
import nout from './pictures/nout.jpeg'
import dvd from './pictures/dvd.png'



// maxHeight: '150px', width: 'auto'


function Carusel() {
	return (
           <div  style = {{ marginBottom: '50px' }} className='container' >
     

<div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner car"  style = {{ height: '450px' }} > 
    <div class="carousel-item active">
      <img
        style = {{ height: '-webkit-fill-available' }} 
        src={tv}
        className="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        style = {{ height: '-webkit-fill-available' }} 
        src={ phone }
        class="d-block w-100 "
        alt="..."
      />
    </div>


    <div class="carousel-item">
      <img
        style = {{ height: '-webkit-fill-available' }}
        src={nout}
        class="d-block w-100 "
        alt="..."
      />
    </div>


     <div class="carousel-item">
      <img
        style = {{ height: '' }}
        src={dvd}
        class="d-block w-100 "
        alt="..."
      />
    </div>


  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


           </div>

		)
}

export default Carusel