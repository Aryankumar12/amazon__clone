import React from 'react'
import "./ProductRowImg.css"
function ProductRowImg({img , img1 , img2 ,img3}) {
  return (
    <div className='product__row__img'>

    {/* <div className="row__img"> */}

            
                <img  className='image' src={img} alt="" />
                <img  className='image1' src={img1} alt="" />
                <img  className='image2' src={img2} alt="" />
                <img  className='image3' src={img3} alt="" />
                
    {/* </div> */}
           
    </div>
  )
}

export default ProductRowImg