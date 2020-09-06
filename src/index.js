import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Route } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./service/books-store-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import store from "./store";

import "./index.scss";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Route>
          <App />
        </Route>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
