import React from 'react';
import {images} from "../../../constants/index"

const Section2 = () => {
  return (
    <div className='section2-container'>
        <img className='section2-img' data-aos="zoom-in" src={images.client1.default.src}/>
        <img className='section2-img' data-aos="zoom-in" src={images.client2.default.src}/>
        <img className='section2-img' data-aos="zoom-in" src={images.client3.default.src}/>
        <img className='section2-img' data-aos="zoom-in" src={images.client4.default.src}/>
        <img className='section2-img' data-aos="zoom-in" src={images.client5.default.src}/>
        <img className='section2-img' data-aos="zoom-in" src={images.client6.default.src}/>
    </div>
  )
}

export default Section2