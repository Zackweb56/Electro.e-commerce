import React from 'react'
// -------css-file------------
import './TopSelling.css'
// -------import-file------------
import TopSellingProducts from './TopSellingProducts/TopSellingProducts'
// -------css-file------------
// -------css-file------------

function TopSelling() {
  return (
    <div className='container my-5 d-flex'>
        <div className='row'>
            <div className='col-4'>
                <TopSellingProducts />
            </div>
            <div className='col-4'>
                <TopSellingProducts />  
            </div>
            <div className='col-4'>
                <TopSellingProducts />
            </div>
        </div>
    </div>
  )
}

export default TopSelling