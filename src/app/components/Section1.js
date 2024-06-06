import React from 'react';
import {images} from "../../../constants/index"

const Section1 = () => {
  return (
    <div className='section1-container'>
        <div>
            <div>
                <h1 data-aos="fade-up" data-aos-duration="400" className='section1-head'>
                Grow your business with Akeshya
                </h1>
                <p data-aos="fade-up" data-aos-duration="700" className='section1-para'>
                We are team of talented website designers, developers & digital marketeers
                </p>
                <button data-aos="fade-up" data-aos-duration="1200" className='section1-btn'>
                Get Started
                </button>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1200">
            <img className="section1-img" src={images.heroimg.default.src}/>
        </div>
    </div>
  )
}

export default Section1