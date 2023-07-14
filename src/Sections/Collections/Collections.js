import React from 'react'
import './Collections.css'
// -------importFilesComponent----------
import CollectionCard from './CollectionCard/CollectionCard'
// --------import images-------------
import Imgproduct01 from '../../assets/images/laptop02.png'
import Imgproduct02 from '../../assets/images/smartwatch08.png'
import Imgproduct03 from '../../assets/images/headphone01.png'

function Collections() {
  return (
    <div className='container mt-3'>
        <div className='row'>
          <CollectionCard imgsrc={Imgproduct01} title='Laptop Collection'/>
          <CollectionCard imgsrc={Imgproduct02} title='SmartPhone Collection'/>
          <CollectionCard imgsrc={Imgproduct03} title='Accessoires Collection'/>
        </div>
    </div>
  )
}

export default Collections