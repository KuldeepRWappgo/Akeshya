import React from 'react';
import { images } from "../../../constants";

const header = () => {
  return (
    <div className="header-container">
        <div className='header-wrapper'>
          <div className='left-logo-wrap'>
     <img className="header-logo" src={images.akeshyalogo.default.src} alt="img"/>
     <h1 className='logo-text'>AKESHYA</h1>
          </div>
     <div className='header-right-wrap'>
      <ul className='header-ul'>
        <li className=''>Home</li>
        <li className=''>About</li>
        <li className=''>Services</li>
        <li className=''>
          <button className="header-btn">
            Contact us
          </button>
        </li>
      </ul>
     </div>
        </div>
    </div>
  )
}

export default header