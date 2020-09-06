import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./shop-header.scss";

const ShopHeader = ({ items, total }) => {
  {
    items.map((item) => {
      const{count,total}= item
    });
  }

  return (
    <header className="box-header row">
      <Link to="/">
        <div className="logo ">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {} items ({})$
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shopingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
