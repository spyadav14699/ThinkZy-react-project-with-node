import React from 'react'

import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4"  to="#">Shooping Hub</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
        </li>
       
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Product</NavLink>
        </li>
       
    
      </ul>
    <div className="button">
        <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-2"> Log in</i>
            
        </NavLink>
    </div>

    <div className="button">
        <NavLink to="/sighnin" className="btn btn-outline-dark ms-2">
            <i className="fa fa-id-card me-2"> Register</i>
            
        </NavLink>
    </div>
    <div className="button">
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-cart-arrow-down me-2"> Cart(0)</i>
        </NavLink>
    </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar