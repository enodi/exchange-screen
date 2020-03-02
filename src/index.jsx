import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configure-store";
import AppRoute from "routers/AppRoute";
import "styles/app.scss";

const store = configureStore();
const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(AppRoute);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("routers/AppRoute", () => {
    const NextApp = require("routers/AppRoute").default;
    render(NextApp);
  });
}
