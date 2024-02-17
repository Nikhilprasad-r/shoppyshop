import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-nav-box">
          Description
        </div>
        <div className="DescriptionBox-nav-box fade">
          Reviews (122)
        </div>
      </div>
      <div className="DescriptionBox-description">
        <p>Static text about the website</p>
        <p>
          extended text
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox