import React, {useState} from 'react'
// ------css file---------
import './Newproducts.css'
// --------carousel--------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// --------------------
import { NewproductData } from './NewproductData';
// import Navbarproducts from './NavbarProducts/Navbarproducts';
// ----icons------
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function Newproducts() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [items, setItems] = useState(NewproductData);
  const filterMenu = (category) => {
    const updateItems = NewproductData.filter((curElm) =>{
      return curElm.category == category;
    });
    setItems(updateItems);
  }
  return (
    <div className='container mt-5 mb-5 pt-3'>
        <div className='Newproduct-header mb-3 d-flex'>
          <h3 className='fw-bold'>New Products</h3>
          <ul className='d-flex'>
            <li><a href='#' onClick={()=> setItems(NewproductData)}>All</a></li>
            <li><a href='#' onClick={()=> filterMenu('Laptop')}>Laptops</a></li>
            <li><a href='#' onClick={()=> filterMenu('Phone')}>Smartphones</a></li>
            <li><a href='#' onClick={()=> filterMenu('Accessoire')}>Accessoires</a></li>
            <li><a href='#' onClick={()=> filterMenu('Camera')}>Camera</a></li>
          </ul>
        </div>
        <Slider {...settings}>
          {items.map((item)=>(
            <div className='row'>
              <div className='col-12'>
                <div className='card cardNewproduct'>
                  <div className='card-top mb-4'>
                    <span className='uptitle'>
                      {item.Promo}
                    </span>
                    <span className='newproducthearticon'><FaHeart /></span>
                    <img src={item.imagePro} alt={item.namePro} className='mt-3'/>
                  </div>
                  <div className='card-bottom'>
                    <span className='category'>{item.category}</span>
                    <h2>{item.namePro}</h2>
                    <p className='price fs-2'>${item.price} <span className='proprice'>$1199.00</span></p>
                    <button type='button'className='ShopAddbtn w-100'>
                      <span className='shopingcart'><FaShoppingCart /></span>
                      <span className='mx-2'>Add Product</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}    
        </Slider>
    </div>
  )
}

export default Newproducts