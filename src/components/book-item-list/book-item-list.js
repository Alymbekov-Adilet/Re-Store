import React from "react";

import "./book-item-list.scss";

const BookItemList = ({ book, onAddToCart }) => {
  const { title, author, coverImage, price } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <span>{author}</span>
        <span className="book-price">{price}$</span>
        <button
          onClick={onAddToCart}
          className="btn btn-info sm"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default BookItemList;
