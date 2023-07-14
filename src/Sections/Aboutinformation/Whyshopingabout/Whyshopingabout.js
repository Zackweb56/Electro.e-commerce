import React from 'react'
import './Whyshopingabout.css'
// --------react-icons----------
import { FaTruckMoving, FaMedal, FaShoppingBag } from "react-icons/fa";

function Whyshopingabout() {
  return (
    <div className='container'>
        <h1 className='text-center mb-5 fw-bold'>Why Shop With Us</h1>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                <div className='aboutcard pb-2 text-center'>
                    <span className='text-center fs-1'><FaTruckMoving/></span>
                    <h3>Fast Delivery</h3>
                    <p>variations of passages of Lorem <br/> Ipsum available</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                <div className='aboutcard pb-2 text-center'>
                    <span className='text-center fs-1'><FaShoppingBag/></span>
                    <h3>Free Shiping </h3>
                    <p>variations of passages of Lorem <br/> Ipsum available</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                <div className='aboutcard pb-2 text-center'>
                    <span className='text-center fs-1'><FaMedal/></span>
                    <h3>Best Quality </h3>
                    <p>variations of passages of Lorem <br/> Ipsum available</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyshopingabout