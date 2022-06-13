import React from 'react'

const Navbar = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4"  href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
    
      </ul>
    <div className="button">
        <a href="" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-2"> Log in</i>
            
        </a>
    </div>

    <div className="button">
        <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-id-card me-2"> Register</i>
            
        </a>
    </div>
    <div className="button">
        <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-cart-arrow-down me-2"> Cart(0)</i>
        </a>
    </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar