import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loader from "components/Loader";
import Header from "components/Header";

export const history = createBrowserHistory();

const ExchangePage = lazy(() => import("pages/ExchangePage"));

const AppRoute = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ExchangePage} />
        </Switch>
      </>
    </Suspense>
  </Router>
);

export default AppRoute;
