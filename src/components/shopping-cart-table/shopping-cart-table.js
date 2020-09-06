import React from "react";
import { connect } from "react-redux";
import {
  bookAddToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart,
} from "../../actions";

import "./shopping-cart-table.scss";

const ShoppingCartTable = ({
  items,
  total,
  onIncrese,
  onDecrese,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>

          <button
            onClick={() => onIncrese(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>

          <button
            onClick={() => onDecrese(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table ">
      <h2>Youre Order</h2>
      <table className="table text-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: {total}$</div>
    </div>
  );
};

const mapStateToProps = ({ shopingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrese: bookAddToCart,
  onDecrese: bookRemoveFromCart,
  onDelete: allBooksRemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
