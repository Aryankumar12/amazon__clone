import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">

        <div className="header__option">

          <div className="header__optionLineOne">Hello Guest</div>
          <div className="header__optionLineTwo">Sign IN</div>
        </div>
        </Link>
        <div className="header__option">
          <div className="header__optionLineOne">Orders &</div>
          <div className="header__optionLineTwo">Returns</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Yours </div>
          <div className="header__optionLineTwo">Prime</div>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
