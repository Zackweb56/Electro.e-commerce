import React from 'react'
// ---------------files----------------
import './Header.css'
// ----react-route-------
import { Link } from 'react-router-dom'
// ------------react-icon----------------
import { FaHeart,FaShoppingCart } from "react-icons/fa";
// ---------imag-logo---------------
import logo from '../../../assets/images/logo.png';

function Header() {
  return (
    <div className='Header'>
      <div className='container d-flex'>
      <div className='Header-logo'>
        <Link to='/'><img src={logo}/></Link>
      </div>
      <div className='Header-searchBar'>
        <form className='form d-flex'>
          <input type='search' className='form-control search' placeholder='Search Here'/>
          <input type='submit' className='btn' value='Search'/>
        </form>
      </div>
      <div className='Header-heart-cart-icon d-flex'>
        <div className='heart px-4'>
          <div className='icon'>
          <FaHeart /> <span>2</span>
          </div>
          <p>Your Wishlist</p>
        </div>
        <div className='cart px-4'>
          <div className='icon'>
          <FaShoppingCart /> <span>3</span> 
          </div>
          <p>Your Wishlist</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header