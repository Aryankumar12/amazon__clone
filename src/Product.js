import React from 'react'
import './Product.css'
function Product({title, price, img, rating}) {
  return (
    <div className='product'>
    <div className="product__info">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
            {Array(rating).fill().map((_, i)=>(
                <p>⭐</p>
            ))}

        </div>
    </div>

    <img src={img} alt="" className="product__image" />
    <button>Add to Basket</button>
    </div>
  )
}

export default Product