import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from'../assets/instagram_icon.png'
import pintrest from '../assets/pintrest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo"><img src={footer_logo} alt="" />
      <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
           </ul>
           <div className="socialIconsContainer">
           <div className="socialIcon">
              <img src={instagram_icon} alt="" />
           </div>
           <div className="socialIcon">
              <img src={pintrest} alt="" />
           </div>
           <div className="socialIcon">
              <img src={whatsapp_icon} alt="" />
           </div>
           </div>
           <div className="footerCopyright">
            <hr />
            <p>copyright @ 2024 all rights reserved</p>
           </div>
    </div>
  )
}

export default Footer