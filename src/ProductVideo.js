import React from "react";
import "./ProductVideo.css";

function ProductVideo({ title, price, rating }) {
  return (
    <div className="product__video">
      <div className="video__left">
        <video
          width="750"
          height="500"
          autoplay="autoplay"
          loop="true"
          muted
          defaultmuted
        >
          <source
            src="https://player.vimeo.com/external/390192696.sd.mp4?s=7bceefecba87d89bf297b6e8df3d5328e9896cf0&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="video__right">
        <div className="product__info__for__video">
          <p>{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button className="btn__video">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductVideo;
