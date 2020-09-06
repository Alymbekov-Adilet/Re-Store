import React from "react";
import { connect } from "react-redux";

import "./cart-item.scss";

const CartItem = ({ items, total }) => {
  return (
    <div className="cart-page">
      {items.map((item, idx) => {
        const { id, title, author, coverImage, count, total } = item;
        return (
          <div key={id} className="cart-page-box">
            <div className="cart-cover">
              <img className="img" src={coverImage} alt="cart-img" />
            </div>
            <div className="cart-details ">
              <span className="cart-title">Name: {title}</span>
              <span className="cart-author">Author: {author}</span>
              <span>
                Total value: <span className="cart-count"> {count}</span>
              </span>
              <span>
                Price: <span className="cart-total">{total}</span> $
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ shopingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(CartItem);
