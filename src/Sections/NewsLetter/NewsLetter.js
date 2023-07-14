import React from 'react'
import './NewsLetter.css'
// --------react-icon---------
import { FaEnvelope, FaFacebookF,
         FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function NewsLetter() {
  return (
    <div className='Newsletter mt-5'>
        <div className='container text-center py-5'>
            <div>
                <p className='envelope'><FaEnvelope /></p>
                <h3>Sign Up for the <b> NEWSLETTER</b></h3>
                <div className='Header-searchBar Newsletteremail'>
                    <form className='form d-flex'>
                        <input type='search' className='form-control search email' placeholder='Enter Your Email'/>
                        <button type='button' className='btn'>
                            <FaEnvelope /> &nbsp; Subscribe
                        </button>
                    </form>
                </div>
                <div className='socialicons'>
                    <span className='socialicon'><FaFacebookF/> </span>
                    <span className='socialicon'><FaWhatsapp/></span>
                    <span className='socialicon'><FaTwitter/></span>
                    <span className='socialicon'><FaInstagram/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter