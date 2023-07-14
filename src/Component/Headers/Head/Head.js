import React from 'react'
// ---------------files----------------
import './Head.css'
// ------------react-icon----------------
import { FaPhone,FaEnvelope,FaLocationArrow,FaDollarSign,FaUser } from "react-icons/fa";

function Head() {
  return (
    <div className='Head'>
      <div className='container d-flex '>
      <div className='Head-links1'>
        <a href='#'><span className='Head-icon'><FaPhone /></span> +212674-362291</a>
        <a href='#'><span className='Head-icon'><FaEnvelope /></span> zakaria@gmail.com</a>
        <a href='#'><span className='Head-icon'><FaLocationArrow /></span>  ISTA NTIC, beni mellal, Morocco</a>
      </div>
      <div className='Head-links2'>
        <a href='#'><span className='Head-icon'><FaDollarSign /></span> USD</a>
        <a href='#'><span className='Head-icon'><FaUser /></span> My Account</a>
      </div>
      </div>
    </div>
  )
}

export default Head