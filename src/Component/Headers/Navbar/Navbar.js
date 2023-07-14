import React from 'react'
import './Navbar.css'
// -----import-Link-react-Routè-----------
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar navbar-expand-lg'>
        <nav className='container nav'>
          <button className='navbar-toggler' type="button" 
            data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='d-flex mb-2 navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='a'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='a'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/Contact' className='a'>Contact</Link>
              </li>
              <li className='nav-item'>
                <a href='#' className='a'>Laptops</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='a'>Smartphones</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='a'>Cameras</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='a'>Accessoires</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar