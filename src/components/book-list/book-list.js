import React, { Component } from "react";
import { connect } from "react-redux";

import BookItemList from "../book-item-list";
import withbookstoreService from "../hoc";
import compose from "../../utils";
import { fetchBooks, bookAddToCart } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.scss";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookItemList
              book={book}
              onAddToCart={() => onAddToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddToCart(id)),
  };
};

export default compose(
  withbookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
