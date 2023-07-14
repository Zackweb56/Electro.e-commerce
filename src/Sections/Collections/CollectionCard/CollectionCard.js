import React from 'react'
import './CollectionCard.css'

// ----icons------
import { FaArrowAltCircleRight } from "react-icons/fa";

function CollectionCard(props) {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 my-5'>
        <div className='card cardCollection'>
            <img src={props.imgsrc} alt='img-product'/>
            <h4 className='mt-2'>{props.title}</h4>
            <a href='#' className=''>SHOP NOW  <FaArrowAltCircleRight /></a>
        </div>
    </div>
  )
}

export default CollectionCard