import updateBookList from "./book-list";
import updateShopingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShopingCart(state, action),
  };
};
export default reducer;
