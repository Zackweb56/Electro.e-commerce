import React from 'react'
import './Aboutinformation.css'
// -----imprt-image------
import imgabout from '../../assets/images/About-02.png'
import Whyshopingabout from './Whyshopingabout/Whyshopingabout'


function Aboutinformation() {
  return (
    <div className='my-5'>
      <div className='my-5'>
        <Whyshopingabout/>
      </div>
      <hr className='Newsletter'/>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6 col-sm-12 imgabout'>
            <img src={imgabout} />
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='aboutinfo mt-5'>
              <h1 className='fw-bold my-2'>About Us</h1>
              <p className='my-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <button type='button' className='ShopAddbtn my-2'>Read More</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutinformation