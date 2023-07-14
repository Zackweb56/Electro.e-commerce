import React from 'react'
// ---------css-file--------
import './Hotdealcircles.css'

function Hotdealcircles() {
  return (
    <div>
        <span className='circle'>
            <span className='fw-bold fs-4'>02</span>
            <span className='fs-5'>Days</span>
        </span>
        <span className='circle'>
            <span className='fw-bold fs-4'>10</span>
            <span className='fs-5'>Hours</span>
        </span>
        <span className='circle'>
            <span className='fw-bold fs-4'>34</span>
            <span className='fs-5'>MINS</span>
        </span>
        <span className='circle'>
            <span className='fw-bold fs-4'>60</span>
            <span className='fs-5'>SECS</span>
        </span>
    </div>
  )
}

export default Hotdealcircles