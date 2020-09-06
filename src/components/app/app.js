import React from "react";
import { Switch, Route } from "react-router-dom";

import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";

import "./app.scss";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
