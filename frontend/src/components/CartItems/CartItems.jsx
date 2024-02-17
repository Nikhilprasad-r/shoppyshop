import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../assets/cart_cross_icon.png'
const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='CartItems'>
<div className="CartItems-format-main">
  <p>Products</p>
  <p>Title</p>
  <p>Price</p>
  <p>Quantity</p>
  <p>Total</p>
  <p>Remove</p>
</div>
<hr />
{all_product.map((e)=>{if(cartItems[e.id]>0){return <div>
<div className="CartItems-format CartItems-format-main ">
  <img src={e.image} alt="" className='carticon-product-icon' />
  <p>{e.name}</p>
  <p>${e.new_price}</p>
  <button className='CartItems-quantity'>{cartItems[e.id]}</button>
  <p>${e.new_price*CartItems[e.id]}</p>
  <img className="carticon-remove-icon" src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt="" />
  </div>
  <hr />
  </div> }
return null;
})}
<div className="CartItems-down">
<div className="CartItems-total">
  <h1>Cart Total</h1>
  <div>
    <div className="CartItems-total-item">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr />
    <div className="CartItems-total-item">
      <p>Shipping Fee</p>
      <p>Free</p>
    </div>
    <hr />
    <div className="CartItems-total-item">
      <h3>Total</h3>
      <h3>${getTotalCartAmount()}</h3>

    </div>

  </div>
  <button>PROCEED TO CHECKOUT</button>
</div>
<div className="CartItems-promocode">
  <p>If you have a promo code, Enter it here</p>
  <div className="CartItems-promo-box">
    <input type="text" placeholder='promocode' />
    <button>Submit</button>
  </div>
</div>
</div>


    </div>
  )
}

export default CartItems