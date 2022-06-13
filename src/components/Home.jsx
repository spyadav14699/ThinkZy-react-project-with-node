import React from 'react'
import Products from './products'

const Home = () => {
  return (
    <div className='hero'>

<div className="card bg-dark text-white border-0">
   
  <img src="\webimages\girlimg.jpg" className="card-img" alt="background" height="450px"/>

  <div className="card-img-overlay d-flex flex-column justify-content-around">

    <div className="container">
    <h5 className="card-title display-3 mb-0 fw-bolder">Fashion Time</h5>
    <p className="card-text">CHECKOUT THE TRENDING ITEMS</p>


    </div>
   
  </div>
</div>
  <Products/>
    </div>
  )
}

export default Home