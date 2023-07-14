import React from 'react'
import './Home.css'
// ----import-container-files-home-page---------
import {Collections, Newproducts,
        Hotdeal, TopSelling, NewsLetter} from '../../Sections/index'

function Home() {
  return (
      <>
        <Collections />
        <Newproducts />
        <Hotdeal />
        <TopSelling />
        <NewsLetter />
      </>
  )
}

export default Home