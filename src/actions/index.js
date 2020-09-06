const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksloaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCES",
    payload: newBooks,
  };
};

const booksError = (err) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: err,
  };
};

export const bookAddToCart = (bookId) => {
  return {
    type: "BOOK_ADD_TO_CART",
    payload: bookId,
  };
};

export const bookRemoveFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId,
  };
};

export const allBooksRemoveFromCart = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVE_FROM_CART",
    payload: bookId,
  };
};

export const totalAdd = () => {
  return {
    type: "TOTAL_ADD",
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => {
      dispatch(booksloaded(data));
    })
    .catch((err) => {
      dispatch(booksError(err));
    });
};

export { fetchBooks };
