import React from 'react'
import './ContactInformation.css'
import image02 from '../../assets/images/contact01.png'


function ContactInformation() {
  return (
    <div className='container py-5'> 
      <div className="row mt-4 d-flex justify-content-center align-items-center">
        <h1 className='text-center'>Contact us</h1>
        <div className="col-6 shadow bg-light p-4">
          <div className="form w-100">
          <form> 
            <div className="form-group">
              <label htmlfor="exampleInputname">Your Name</label>
              <input type="password" className="form-control mb-3" id="exampleInputname" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label htmlfor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label htmlfor="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
          </div>
        </div>
        <div className="col-6">
          <img src={image02} className="w-100" />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation