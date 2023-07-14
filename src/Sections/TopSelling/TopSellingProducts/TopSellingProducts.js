import React from 'react'
// -------css-file----------
import './TopSellingProducts.css'
// import imgpro2 from '../../../assets/images/laptop04.png'
// --------carousel--------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// -------------------------
import { NewproductData } from '../../NewProducts/NewproductData'



function TopSellingProducts() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const Newpro = NewproductData.sort(() => Math.random() - Math.random()).slice(0, 10);
    return (
        <div className='container'>
            <h2 className='text-center'>TopSelling</h2>
            <Slider {...settings} className='text-center'>
                {Newpro.map((item)=>(
                    <div className='row'>
                        <div className="col-6 text-center w-100 ">
                            {/* <div className="card"> */}
                                <div className='d-flex direction-column mx-5'> 
                                    <div className='d-flex align-items-center'>
                                        <div className='imgTopselling'>
                                            <img src={item.imagePro} />
                                        </div>
                                        <div className='description mx-2'>
                                            <span className=''>{item.type}</span>
                                            <h5>{item.namePro}</h5>
                                            <p className=''>${item.price} <span className=''>$1199.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default TopSellingProducts