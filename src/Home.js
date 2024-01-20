import React from "react";
import "./Home.css";
import Product from "./Product";
import ProductRowImg from "./ProductRowImg";
import ProductVideo from "./ProductVideo";
import SmallSection from "./SmallSection";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/PC_Hero_2x-toys._CB591544420_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
      
        <Product 
        title="Apple iPhone 14 (128 GB) - Blue (Original Apple Product)" 
        rating={5}
        img="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
        price={799.88}

        />
        <Product 
            title="Safari Pentagon Medium Trolley Bag, 65 cm , 4 Wheel Cyan Luggage for Men and Women, Polypropylene Hard Side "
            rating={4}
            img="https://m.media-amazon.com/images/I/51zzUcG6EKL._UX679_.jpg"
            price={666.6}
        />
      </div>
      <div className="home__row">
        <Product 
        title="Godrej aer Twist – Car Air Freshener | Car Accessories | Cool Surf Blue (45g)"
        rating={3}
        img="https://m.media-amazon.com/images/I/61OQQtOH8qL._SL1500_.jpg"
        price={56.66}

        />
        <Product
        title="Yamaha F280 Acoustic Rosewood Guitar (Natural, Beige)" 
        rating={5}
        img="https://m.media-amazon.com/images/I/71RkY055j7L._SL1500_.jpg"
        price={249.99} 

        />
        <Product
        title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode" 
        rating={4}
        img="https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg"
        price={99.99} 

        />
      </div>
      <div className="home__row">
        <Product
        title="Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-65A95K (Black)" 
        rating={5}
        img="https://m.media-amazon.com/images/I/81-G4oTdhOL._SL1500_.jpg"
        price={5999.99}/>
      </div>
      <div className="home__image__row">
        <ProductRowImg img="https://m.media-amazon.com/images/I/512FZYKLB7L._AC_SY400_.jpg"  img1="https://m.media-amazon.com/images/I/61oSoHc7VtL._AC_SY400_.jpg"
          img2="https://m.media-amazon.com/images/I/81pe3xsOFnL._AC_SY400_.jpg" img3="https://m.media-amazon.com/images/I/71VfR7Xhk8L._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
        title="Apple Watch Series 8 [GPS 41mm] Smart Watch w/Starlight Aluminum Case with Starlight Sport Band - S/M. " 
        rating={5}
        img="https://m.media-amazon.com/images/I/71uOgDy40BL._AC_SL1500_.jpg"
        price={599.99}/>
      </div>
      <div className="product__video__row">
        <ProductVideo 
            title="Chocolates ®️ " 
        rating={5}
          
        price={59.99}
        />
      </div>
      <div className="small__section__row">
        <SmallSection  title="Pick up where you left off" img1="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/AT__hi_res._SY232_CB593591693_.jpg" img2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen-jars1-ofru5_372x232_in-en._SY232_CB592591861_.jpg" img3="https://m.media-amazon.com/images/I/614A-+a8BQL._AC_SY270_.jpg" img4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_372X232_4._SY232_CB591041374_.jpg" heading1="Upto 50% off | American tourister" heading2="Moisturizers" heading3="HP Pavilion x360 13th gen Laptop" heading4="Explore all new launches"/>


        <SmallSection  title="Great Summer Sale | Brands in Focus" img1="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/ASCENT-MayART23/D78738739_IN_WLME_Samsung-ASCENT-MayART_PC_QuadCard_372X232._SY232_CB592407901_.jpg" img2="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/pc_quadcard_372x232_807965da._SY232_CB590618563_.jpg" img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/SmasungPC_QuadCard_1x._SY232_CB590527824_.jpg" img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/MAY_ART_Teaser/TCL_Purple_PC_QuadCard_372X2321._SY232_CB592184961_.jpg" heading1="Upto 40% off | Samsung Smartphone" heading2="Upto 50% off | Loreal" heading3="Starting $699 | Samsung Appliances " heading4="Up to 60% off | TCL tv's"/>
        

      </div>
    </div>
  );
}

export default Home;
