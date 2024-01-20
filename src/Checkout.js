import React from 'react'
import './Checkout.css'

import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/0378081164a14ace8641e791883d1867.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" />

            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
            </div>
        </div>
        <div className="checkout__right">
        <Subtotal />
            
        </div>
    </div>
  )
}

export default Checkout