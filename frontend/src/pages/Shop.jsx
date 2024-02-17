import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popuplar/Popular'
import Offer from '../components/Offers/Offer'
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop