import React from 'react'
import './Footer.css'
// ------------react-icon------------
import { FaPhone, FaEnvelope, FaLocationArrow, 
        FaCreditCard, FaCcPaypal, FaCcVisa,
        FaCcMastercard, FaCcDiscover, FaCcAmex } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='bgc-darker footer'>
            <div className='container text-light py-5'>
                <div className='row'>
                    <div className='about col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <h3 className='fw-bold'>About Us</h3>
                        <p className='aboutus'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                        </p>
                        <div className='Head-links1 direction-column footerlinks'>
                            <a href='#'>
                                <span className='Head-icon'><FaLocationArrow/></span>&nbsp;
                                ISTA NTIC, beni mellal, Morocco
                            </a>
                            <a href='#'>
                                <span className='Head-icon'><FaPhone/></span>&nbsp;
                                +212674-362291
                            </a>
                            <a href='#'>
                                <span className='Head-icon'><FaEnvelope/></span>&nbsp;
                                zakaria@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className='categories col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <h3 className='fw-bold'>Categories</h3>
                        <div className='Head-links1 direction-column footerlinks'>
                            <a href='#'>Hot Deal</a>
                            <a href='#'>Laptops</a>
                            <a href='#'>SmartPhones</a>
                            <a href='#'>Cameras</a>
                            <a href='#'>Accessoires</a>
                        </div>
                    </div>
                    <div className='information col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <h3 className='fw-bold'>Information</h3>
                        <div className='Head-links1 direction-column footerlinks'>
                            <a href='#'>About Us</a>
                            <a href='#'>Contact Us</a>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Orders and Returns</a>
                            <a href='#'>Terms & Conditions</a>
                        </div>
                    </div>
                    <div className='services col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <h3 className='fw-bold'>Service</h3>
                        <div className='Head-links1 direction-column footerlinks'>
                            <a href='#'>My Account</a>
                            <a href='#'>View Cart</a>
                            <a href='#'>Wishlist</a>
                            <a href='#'>Track My Order</a>
                            <a href='#'>Helps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bgc-dark text-center'>
            <div className='payement-icons fs-1 py-3'>
                <FaCreditCard/>&nbsp;
                <FaCcVisa/>&nbsp;
                <FaCcPaypal/>&nbsp;
                <FaCcDiscover/>&nbsp;
                <FaCcMastercard/>&nbsp;
                <FaCcAmex/>&nbsp;
            </div>
            <div className='copyrights aboutus pb-4'>
                <span>
                    Copyright ©2022 All rights reserved | Created by &nbsp; 
                    <span className='Head-icon'>Zakaria Boughaba</span>
                </span>
            </div>
        </div>
    </>
  )
}

export default Footer