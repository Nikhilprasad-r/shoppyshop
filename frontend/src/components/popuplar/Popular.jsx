import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../item/Item'

const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
     
       {data_product.map((item,i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
        })}
      </div>
    </div>
  )
}

export default Popular