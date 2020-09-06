import cartItem from "../components/cart-item/cart-item";

const updateCartItems = (cartItems, item, idx) => {
  //удаление
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
    coverImage = book.coverImage,
    author = book.author,
  } = item;

  return {
    id,
    title,
    coverImage,
    author,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shopingCart: { cartItems },
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);

  return {
    orderTotal: 210,
    cartItems: updateCartItems(state.shopingCart.cartItems, newItem, itemIndex),
  };
};

const updateShopingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case "BOOK_ADD_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVE_FROM_CART":
      const item = state.shopingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shopingCart;
  }
};

export default updateShopingCart;
