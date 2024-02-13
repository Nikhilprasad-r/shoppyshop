import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
      <div className="offerLeft">
        <h1>Exclusive offers</h1>
        <h1>For you</h1>
        <p>Only On Best-Sellers</p>
        <button>Check Now</button>
      </div>
      <div className="offerRight">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer