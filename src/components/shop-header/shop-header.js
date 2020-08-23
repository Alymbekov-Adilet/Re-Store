import React from "react";

import "./shop-header.scss";

const ShopHeader = () => {
  return (
    <div className="box-header mt-2 ">
      <a href="#" className="logo text-dark">
        ReStore
      </a>
      <a className="shopping-cart mt-1" href="#">
        <i className="cart-icon fa fa-shopping-cart" />2 items ,total 240$
      </a>
    </div>
  );
};

export default ShopHeader;
