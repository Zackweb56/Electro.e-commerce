import React from 'react'
// ----------css-file----------
import './Hotdeal.css'
// ----------images-----------
import img01 from '../../assets/images/laptop04.png'
import img02 from '../../assets/images/headphone02.png'
// ----------images-----------
import Hotdealcircles from './Hotdealcircles/Hotdealcircles'

function Hotdeal() {
  return (
    <div className='bgc row  w-100'>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='col-4 text-center'>
                <img className='w-75' src={img02} />
            </div>
            <div className='col-4 text-center'>
                <div className='circles my-5'>
                    <Hotdealcircles />
                </div>
                <div className='titles text-light'>
                    <h1>Hot Deal This Week</h1>
                    <h2 className='promo'>New Collection Up to 50% OFF</h2>
                </div>
                <div className='mt-4'>
                    <button type='button' className='ShopAddbtn mb-3'>SHOP NOW</button>
                </div>
            </div>
            <div className='col-4 text-center'>
                <img className='w-75' src={img01} />
            </div>
        </div>
    </div>
  )
}

export default Hotdeal