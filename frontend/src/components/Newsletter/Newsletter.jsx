import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>get exclusive offers on your email</h1>
      <p>Subscribe to our newsletter</p>
      <div className="input">
        <input type="email" name="your email id" id="" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter